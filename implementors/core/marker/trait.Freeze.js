(function() {var implementors = {};
implementors["polars"] = [{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/struct.ChunkedArray.html\" title=\"struct polars::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;","synthetic":true,"types":["polars::chunked_array::ChunkedArray"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/struct.NoNull.html\" title=\"struct polars::chunked_array::NoNull\">NoNull</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["polars::chunked_array::NoNull"]},{"text":"impl Freeze for <a class=\"enum\" href=\"polars/chunked_array/ops/enum.FillNoneStrategy.html\" title=\"enum polars::chunked_array::ops::FillNoneStrategy\">FillNoneStrategy</a>","synthetic":true,"types":["polars::chunked_array::ops::FillNoneStrategy"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/builder/struct.PrimitiveChunkedBuilder.html\" title=\"struct polars::chunked_array::builder::PrimitiveChunkedBuilder\">PrimitiveChunkedBuilder</a>&lt;T&gt;","synthetic":true,"types":["polars::chunked_array::builder::PrimitiveChunkedBuilder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"polars/chunked_array/builder/struct.Utf8ChunkedBuilder.html\" title=\"struct polars::chunked_array::builder::Utf8ChunkedBuilder\">Utf8ChunkedBuilder</a>","synthetic":true,"types":["polars::chunked_array::builder::Utf8ChunkedBuilder"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/builder/struct.AlignedVec.html\" title=\"struct polars::chunked_array::builder::AlignedVec\">AlignedVec</a>&lt;T&gt;","synthetic":true,"types":["polars::chunked_array::builder::AlignedVec"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/builder/struct.LargeListPrimitiveChunkedBuilder.html\" title=\"struct polars::chunked_array::builder::LargeListPrimitiveChunkedBuilder\">LargeListPrimitiveChunkedBuilder</a>&lt;T&gt;","synthetic":true,"types":["polars::chunked_array::builder::LargeListPrimitiveChunkedBuilder"]},{"text":"impl Freeze for <a class=\"struct\" href=\"polars/chunked_array/builder/struct.LargeListUtf8ChunkedBuilder.html\" title=\"struct polars::chunked_array::builder::LargeListUtf8ChunkedBuilder\">LargeListUtf8ChunkedBuilder</a>","synthetic":true,"types":["polars::chunked_array::builder::LargeListUtf8ChunkedBuilder"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.NumIterSingleChunkNullCheck.html\" title=\"struct polars::chunked_array::iterator::NumIterSingleChunkNullCheck\">NumIterSingleChunkNullCheck</a>&lt;'a, T&gt;","synthetic":true,"types":["polars::chunked_array::iterator::NumIterSingleChunkNullCheck"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.NumIterSingleChunk.html\" title=\"struct polars::chunked_array::iterator::NumIterSingleChunk\">NumIterSingleChunk</a>&lt;'a, T&gt;","synthetic":true,"types":["polars::chunked_array::iterator::NumIterSingleChunk"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.NumIterManyChunk.html\" title=\"struct polars::chunked_array::iterator::NumIterManyChunk\">NumIterManyChunk</a>&lt;'a, T&gt;","synthetic":true,"types":["polars::chunked_array::iterator::NumIterManyChunk"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.NumIterManyChunkNullCheck.html\" title=\"struct polars::chunked_array::iterator::NumIterManyChunkNullCheck\">NumIterManyChunkNullCheck</a>&lt;'a, T&gt;","synthetic":true,"types":["polars::chunked_array::iterator::NumIterManyChunkNullCheck"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.Utf8IterCont.html\" title=\"struct polars::chunked_array::iterator::Utf8IterCont\">Utf8IterCont</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::Utf8IterCont"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.Utf8IterSingleChunk.html\" title=\"struct polars::chunked_array::iterator::Utf8IterSingleChunk\">Utf8IterSingleChunk</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::Utf8IterSingleChunk"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.Utf8IterSingleChunkNullCheck.html\" title=\"struct polars::chunked_array::iterator::Utf8IterSingleChunkNullCheck\">Utf8IterSingleChunkNullCheck</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::Utf8IterSingleChunkNullCheck"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.Utf8IterManyChunk.html\" title=\"struct polars::chunked_array::iterator::Utf8IterManyChunk\">Utf8IterManyChunk</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::Utf8IterManyChunk"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.Utf8IterManyChunkNullCheck.html\" title=\"struct polars::chunked_array::iterator::Utf8IterManyChunkNullCheck\">Utf8IterManyChunkNullCheck</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::Utf8IterManyChunkNullCheck"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.BooleanIterCont.html\" title=\"struct polars::chunked_array::iterator::BooleanIterCont\">BooleanIterCont</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::BooleanIterCont"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.BooleanIterSingleChunk.html\" title=\"struct polars::chunked_array::iterator::BooleanIterSingleChunk\">BooleanIterSingleChunk</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::BooleanIterSingleChunk"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.BooleanIterSingleChunkNullCheck.html\" title=\"struct polars::chunked_array::iterator::BooleanIterSingleChunkNullCheck\">BooleanIterSingleChunkNullCheck</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::BooleanIterSingleChunkNullCheck"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.BooleanIterManyChunk.html\" title=\"struct polars::chunked_array::iterator::BooleanIterManyChunk\">BooleanIterManyChunk</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::BooleanIterManyChunk"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.BooleanIterManyChunkNullCheck.html\" title=\"struct polars::chunked_array::iterator::BooleanIterManyChunkNullCheck\">BooleanIterManyChunkNullCheck</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::BooleanIterManyChunkNullCheck"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.ListIterCont.html\" title=\"struct polars::chunked_array::iterator::ListIterCont\">ListIterCont</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::ListIterCont"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.ListIterSingleChunk.html\" title=\"struct polars::chunked_array::iterator::ListIterSingleChunk\">ListIterSingleChunk</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::ListIterSingleChunk"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.ListIterSingleChunkNullCheck.html\" title=\"struct polars::chunked_array::iterator::ListIterSingleChunkNullCheck\">ListIterSingleChunkNullCheck</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::ListIterSingleChunkNullCheck"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.ListIterManyChunk.html\" title=\"struct polars::chunked_array::iterator::ListIterManyChunk\">ListIterManyChunk</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::ListIterManyChunk"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/iterator/struct.ListIterManyChunkNullCheck.html\" title=\"struct polars::chunked_array::iterator::ListIterManyChunkNullCheck\">ListIterManyChunkNullCheck</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::ListIterManyChunkNullCheck"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"enum\" href=\"polars/chunked_array/iterator/enum.NumericChunkIterDispatch.html\" title=\"enum polars::chunked_array::iterator::NumericChunkIterDispatch\">NumericChunkIterDispatch</a>&lt;'a, T&gt;","synthetic":true,"types":["polars::chunked_array::iterator::NumericChunkIterDispatch"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"polars/chunked_array/iterator/enum.Utf8ChunkIterDispatch.html\" title=\"enum polars::chunked_array::iterator::Utf8ChunkIterDispatch\">Utf8ChunkIterDispatch</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::Utf8ChunkIterDispatch"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"polars/chunked_array/iterator/enum.BooleanIterDispatch.html\" title=\"enum polars::chunked_array::iterator::BooleanIterDispatch\">BooleanIterDispatch</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::BooleanIterDispatch"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"polars/chunked_array/iterator/enum.ListIterDispatch.html\" title=\"enum polars::chunked_array::iterator::ListIterDispatch\">ListIterDispatch</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::iterator::ListIterDispatch"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/par/utf8/struct.Utf8IntoIter.html\" title=\"struct polars::chunked_array::par::utf8::Utf8IntoIter\">Utf8IntoIter</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::par::utf8::Utf8IntoIter"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/par/utf8/struct.Utf8IntoIterCont.html\" title=\"struct polars::chunked_array::par::utf8::Utf8IntoIterCont\">Utf8IntoIterCont</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::par::utf8::Utf8IntoIterCont"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/take/struct.NumTakeRandomChunked.html\" title=\"struct polars::chunked_array::take::NumTakeRandomChunked\">NumTakeRandomChunked</a>&lt;'a, T&gt;","synthetic":true,"types":["polars::chunked_array::take::NumTakeRandomChunked"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/take/struct.NumTakeRandomCont.html\" title=\"struct polars::chunked_array::take::NumTakeRandomCont\">NumTakeRandomCont</a>&lt;'a, T&gt;","synthetic":true,"types":["polars::chunked_array::take::NumTakeRandomCont"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/take/struct.NumTakeRandomSingleChunk.html\" title=\"struct polars::chunked_array::take::NumTakeRandomSingleChunk\">NumTakeRandomSingleChunk</a>&lt;'a, T&gt;","synthetic":true,"types":["polars::chunked_array::take::NumTakeRandomSingleChunk"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/take/struct.Utf8TakeRandom.html\" title=\"struct polars::chunked_array::take::Utf8TakeRandom\">Utf8TakeRandom</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::take::Utf8TakeRandom"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/take/struct.Utf8TakeRandomSingleChunk.html\" title=\"struct polars::chunked_array::take::Utf8TakeRandomSingleChunk\">Utf8TakeRandomSingleChunk</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::take::Utf8TakeRandomSingleChunk"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/take/struct.BoolTakeRandom.html\" title=\"struct polars::chunked_array::take::BoolTakeRandom\">BoolTakeRandom</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::take::BoolTakeRandom"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/take/struct.BoolTakeRandomSingleChunk.html\" title=\"struct polars::chunked_array::take::BoolTakeRandomSingleChunk\">BoolTakeRandomSingleChunk</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::take::BoolTakeRandomSingleChunk"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/take/struct.ListTakeRandom.html\" title=\"struct polars::chunked_array::take::ListTakeRandom\">ListTakeRandom</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::take::ListTakeRandom"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/chunked_array/take/struct.ListTakeRandomSingleChunk.html\" title=\"struct polars::chunked_array::take::ListTakeRandomSingleChunk\">ListTakeRandomSingleChunk</a>&lt;'a&gt;","synthetic":true,"types":["polars::chunked_array::take::ListTakeRandomSingleChunk"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"enum\" href=\"polars/chunked_array/take/enum.NumTakeRandomDispatch.html\" title=\"enum polars::chunked_array::take::NumTakeRandomDispatch\">NumTakeRandomDispatch</a>&lt;'a, T&gt;","synthetic":true,"types":["polars::chunked_array::take::NumTakeRandomDispatch"]},{"text":"impl Freeze for <a class=\"struct\" href=\"polars/datatypes/struct.Utf8Type.html\" title=\"struct polars::datatypes::Utf8Type\">Utf8Type</a>","synthetic":true,"types":["polars::datatypes::Utf8Type"]},{"text":"impl Freeze for <a class=\"struct\" href=\"polars/datatypes/struct.LargeListType.html\" title=\"struct polars::datatypes::LargeListType\">LargeListType</a>","synthetic":true,"types":["polars::datatypes::LargeListType"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"polars/datatypes/enum.AnyType.html\" title=\"enum polars::datatypes::AnyType\">AnyType</a>&lt;'a&gt;","synthetic":true,"types":["polars::datatypes::AnyType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"polars/error/enum.PolarsError.html\" title=\"enum polars::error::PolarsError\">PolarsError</a>","synthetic":true,"types":["polars::error::PolarsError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"polars/frame/struct.DataFrame.html\" title=\"struct polars::frame::DataFrame\">DataFrame</a>","synthetic":true,"types":["polars::frame::DataFrame"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"polars/frame/struct.RecordBatchIter.html\" title=\"struct polars::frame::RecordBatchIter\">RecordBatchIter</a>&lt;'a&gt;","synthetic":true,"types":["polars::frame::RecordBatchIter"]},{"text":"impl&lt;'df, 'selection_str&gt; Freeze for <a class=\"struct\" href=\"polars/frame/group_by/struct.GroupBy.html\" title=\"struct polars::frame::group_by::GroupBy\">GroupBy</a>&lt;'df, 'selection_str&gt;","synthetic":true,"types":["polars::frame::group_by::GroupBy"]},{"text":"impl&lt;'df, 'selection_str&gt; Freeze for <a class=\"struct\" href=\"polars/frame/group_by/struct.Pivot.html\" title=\"struct polars::frame::group_by::Pivot\">Pivot</a>&lt;'df, 'selection_str&gt;","synthetic":true,"types":["polars::frame::group_by::Pivot"]},{"text":"impl&lt;'a, W&gt; Freeze for <a class=\"struct\" href=\"polars/frame/ser/csv/struct.CsvWriter.html\" title=\"struct polars::frame::ser::csv::CsvWriter\">CsvWriter</a>&lt;'a, W&gt;","synthetic":true,"types":["polars::frame::ser::csv::CsvWriter"]},{"text":"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"polars/frame/ser/csv/struct.CsvReader.html\" title=\"struct polars::frame::ser::csv::CsvReader\">CsvReader</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["polars::frame::ser::csv::CsvReader"]},{"text":"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"polars/frame/ser/ipc/struct.IPCReader.html\" title=\"struct polars::frame::ser::ipc::IPCReader\">IPCReader</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["polars::frame::ser::ipc::IPCReader"]},{"text":"impl&lt;'a, W&gt; Freeze for <a class=\"struct\" href=\"polars/frame/ser/ipc/struct.IPCWriter.html\" title=\"struct polars::frame::ser::ipc::IPCWriter\">IPCWriter</a>&lt;'a, W&gt;","synthetic":true,"types":["polars::frame::ser::ipc::IPCWriter"]},{"text":"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"polars/frame/ser/json/struct.JsonReader.html\" title=\"struct polars::frame::ser::json::JsonReader\">JsonReader</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["polars::frame::ser::json::JsonReader"]},{"text":"impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"polars/frame/ser/parquet/struct.ParquetReader.html\" title=\"struct polars::frame::ser::parquet::ParquetReader\">ParquetReader</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["polars::frame::ser::parquet::ParquetReader"]},{"text":"impl Freeze for <a class=\"enum\" href=\"polars/series/enum.Series.html\" title=\"enum polars::series::Series\">Series</a>","synthetic":true,"types":["polars::series::Series"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()