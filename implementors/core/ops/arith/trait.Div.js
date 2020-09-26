(function() {var implementors = {};
implementors["polars"] = [{"text":"impl&lt;'_, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;&amp;'_ <a class=\"struct\" href=\"polars/chunked_array/struct.ChunkedArray.html\" title=\"struct polars::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;&gt; for &amp;'_ <a class=\"struct\" href=\"polars/chunked_array/struct.ChunkedArray.html\" title=\"struct polars::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"polars/datatypes/trait.PolarsNumericType.html\" title=\"trait polars::datatypes::PolarsNumericType\">PolarsNumericType</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a>,&nbsp;</span>","synthetic":false,"types":["polars::chunked_array::ChunkedArray"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;<a class=\"struct\" href=\"polars/chunked_array/struct.ChunkedArray.html\" title=\"struct polars::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"polars/chunked_array/struct.ChunkedArray.html\" title=\"struct polars::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"polars/datatypes/trait.PolarsNumericType.html\" title=\"trait polars::datatypes::PolarsNumericType\">PolarsNumericType</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a>,&nbsp;</span>","synthetic":false,"types":["polars::chunked_array::ChunkedArray"]},{"text":"impl&lt;'_, T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;N&gt; for &amp;'_ <a class=\"struct\" href=\"polars/chunked_array/struct.ChunkedArray.html\" title=\"struct polars::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"polars/datatypes/trait.PolarsNumericType.html\" title=\"trait polars::datatypes::PolarsNumericType\">PolarsNumericType</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.NumCast.html\" title=\"trait num_traits::cast::NumCast\">NumCast</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.ToPrimitive.html\" title=\"trait num_traits::cast::ToPrimitive\">ToPrimitive</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;Output = T::<a class=\"type\" href=\"polars/prelude/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type polars::prelude::ArrowPrimitiveType::Native\">Native</a>&gt; + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a>,&nbsp;</span>","synthetic":false,"types":["polars::chunked_array::ChunkedArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;<a class=\"enum\" href=\"polars/series/enum.Series.html\" title=\"enum polars::series::Series\">Series</a>&gt; for <a class=\"enum\" href=\"polars/series/enum.Series.html\" title=\"enum polars::series::Series\">Series</a>","synthetic":false,"types":["polars::series::Series"]},{"text":"impl&lt;'_&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;&amp;'_ <a class=\"enum\" href=\"polars/series/enum.Series.html\" title=\"enum polars::series::Series\">Series</a>&gt; for &amp;'_ <a class=\"enum\" href=\"polars/series/enum.Series.html\" title=\"enum polars::series::Series\">Series</a>","synthetic":false,"types":["polars::series::Series"]},{"text":"impl&lt;'_, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;T&gt; for &amp;'_ <a class=\"enum\" href=\"polars/series/enum.Series.html\" title=\"enum polars::series::Series\">Series</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.NumCast.html\" title=\"trait num_traits::cast::NumCast\">NumCast</a>,&nbsp;</span>","synthetic":false,"types":["polars::series::Series"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;T&gt; for <a class=\"enum\" href=\"polars/series/enum.Series.html\" title=\"enum polars::series::Series\">Series</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.NumCast.html\" title=\"trait num_traits::cast::NumCast\">NumCast</a>,&nbsp;</span>","synthetic":false,"types":["polars::series::Series"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()