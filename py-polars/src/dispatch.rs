use crate::series::PySeries;
use polars::prelude::*;
use pyo3::prelude::*;
use pyo3::types::PyTuple;

pub trait PyArrowPrimitiveType: ArrowPrimitiveType {}

impl PyArrowPrimitiveType for UInt8Type {}
impl PyArrowPrimitiveType for UInt16Type {}
impl PyArrowPrimitiveType for UInt32Type {}
impl PyArrowPrimitiveType for UInt64Type {}
impl PyArrowPrimitiveType for Int8Type {}
impl PyArrowPrimitiveType for Int16Type {}
impl PyArrowPrimitiveType for Int32Type {}
impl PyArrowPrimitiveType for Int64Type {}
impl PyArrowPrimitiveType for Float32Type {}
impl PyArrowPrimitiveType for Float64Type {}
impl PyArrowPrimitiveType for Date32Type {}
impl PyArrowPrimitiveType for Date64Type {}
impl PyArrowPrimitiveType for Time64NanosecondType {}
impl PyArrowPrimitiveType for Time64MicrosecondType {}
impl PyArrowPrimitiveType for Time32MillisecondType {}
impl PyArrowPrimitiveType for Time32SecondType {}
impl PyArrowPrimitiveType for DurationNanosecondType {}
impl PyArrowPrimitiveType for DurationMicrosecondType {}
impl PyArrowPrimitiveType for DurationMillisecondType {}
impl PyArrowPrimitiveType for DurationSecondType {}
impl PyArrowPrimitiveType for IntervalYearMonthType {}
impl PyArrowPrimitiveType for IntervalDayTimeType {}
impl PyArrowPrimitiveType for TimestampNanosecondType {}
impl PyArrowPrimitiveType for TimestampMicrosecondType {}
impl PyArrowPrimitiveType for TimestampMillisecondType {}
impl PyArrowPrimitiveType for TimestampSecondType {}
impl PyArrowPrimitiveType for BooleanType {}

pub trait ApplyLambda<'a, 'b> {
    fn apply_lambda(&'b self, _py: Python, _lambda: &'a PyAny) -> PyResult<PySeries> {
        unimplemented!()
    }

    fn apply_lambda_with_primitive_dtype<D>(
        &'b self,
        _py: Python,
        _lambda: &'a PyAny,
    ) -> PyResult<ChunkedArray<D>>
    where
        D: PyArrowPrimitiveType,
        D::Native: ToPyObject + FromPyObject<'a>,
    {
        unimplemented!()
    }
}

macro_rules! impl_lambda_with_primitive_type {
    ($self:ident, $dtype:ty, $py:ident, $lambda:ident) => {{
        let ca = if $self.null_count() == 0 {
            let mut it = $self.into_no_null_iter();
            let mut builder = PrimitiveChunkedBuilder::<$dtype>::new($self.name(), $self.len());

            while let Some(v) = it.next() {
                let arg = PyTuple::new($py, &[v]);
                let out = $lambda.call1(arg)?;
                builder.append_value(out.extract()?)
            }
            builder.finish()
        } else {
            let mut it = $self.into_iter();
            let mut builder = PrimitiveChunkedBuilder::<$dtype>::new($self.name(), $self.len());
            while let Some(opt_v) = it.next() {
                if let Some(v) = opt_v {
                    let arg = PyTuple::new($py, &[v]);
                    let out = $lambda.call1(arg)?;
                    builder.append_value(out.extract()?)
                } else {
                    builder.append_null()
                }
            }
            builder.finish()
        };
        Ok(ca)
    }};
}

impl<'a, 'b, T> ApplyLambda<'a, 'b> for ChunkedArray<T>
where
    T: PyArrowPrimitiveType,
    T::Native: ToPyObject + FromPyObject<'a>,
    &'b ChunkedArray<T>:
        IntoIterator<Item = Option<T::Native>> + IntoNoNullIterator<Item = T::Native>,
{
    fn apply_lambda(&'b self, py: Python, lambda: &'a PyAny) -> PyResult<PySeries> {
        self.apply_lambda_with_primitive_dtype::<T>(py, lambda)
            .map(|ca| PySeries::new(ca.into_series()))
    }

    fn apply_lambda_with_primitive_dtype<D>(
        &'b self,
        py: Python,
        lambda: &'a PyAny,
    ) -> PyResult<ChunkedArray<D>>
    where
        D: PyArrowPrimitiveType,
        D::Native: ToPyObject + FromPyObject<'a>,
    {
        impl_lambda_with_primitive_type!(self, D, py, lambda)
    }
}

impl<'a, 'b> ApplyLambda<'a, 'b> for Utf8Chunked {
    fn apply_lambda(&'b self, py: Python, lambda: &'a PyAny) -> PyResult<PySeries> {
        let ca = if self.null_count() == 0 {
            let mut it = self.into_no_null_iter();
            let mut builder = Utf8ChunkedBuilder::new(self.name(), self.len());

            while let Some(v) = it.next() {
                let arg = PyTuple::new(py, &[v]);
                let out = lambda.call1(arg)?;
                let s: &str = out.extract()?;
                builder.append_value(s)
            }
            builder.finish()
        } else {
            let mut it = self.into_iter();
            let mut builder = Utf8ChunkedBuilder::new(self.name(), self.len());
            while let Some(opt_v) = it.next() {
                if let Some(v) = opt_v {
                    let arg = PyTuple::new(py, &[v]);
                    let out = lambda.call1(arg)?;
                    let s: &str = out.extract()?;
                    builder.append_value(s)
                } else {
                    builder.append_null()
                }
            }
            builder.finish()
        };
        Ok(PySeries::new(ca.into_series()))
    }

    fn apply_lambda_with_primitive_dtype<D>(
        &'b self,
        py: Python,
        lambda: &'a PyAny,
    ) -> PyResult<ChunkedArray<D>>
    where
        D: PyArrowPrimitiveType,
        D::Native: ToPyObject + FromPyObject<'a>,
    {
        impl_lambda_with_primitive_type!(self, D, py, lambda)
    }
}

impl<'a, 'b> ApplyLambda<'a, 'b> for LargeListChunked {}
