initSidebarItems({"enum":[["AttrStyle","Distinguishes between attributes that decorate an item and attributes that are contained within an item."],["BareFnArgName","Name of an argument in a function type: the `n` in `fn(n: usize)`."],["BinOp","A binary operator: `+`, `+=`, `&`."],["Data","The storage of a struct, enum or union data structure."],["Expr","A Rust expression."],["Fields","Data stored within an enum variant or struct."],["FloatSuffix","The suffix on a floating point literal if any, like the `f32` in `1.0f32`."],["FnArg","An argument in a function signature: the `n: usize` in `fn f(n: usize)`."],["ForeignItem","An item within an `extern` block."],["GenericArgument","An individual generic argument, like `'a`, `T`, or `Item = T`."],["GenericMethodArgument","An individual generic argument to a method, like `T`."],["GenericParam","A generic type parameter, lifetime, or const generic: `T: Into<String>`, `'a: 'b`, `const LEN: usize`."],["ImplItem","An item within an impl block."],["IntSuffix","The suffix on an integer literal if any, like the `u8` in `127u8`."],["Item","Things that can appear directly inside of a module or scope."],["Lit","A Rust literal such as a string or integer or boolean."],["MacroDelimiter","A grouping token that surrounds a macro body: `m!(...)` or `m!{...}` or `m![...]`."],["Member","A struct or tuple struct field accessed in a struct literal or field expression."],["Meta","Content of a compile-time structured attribute."],["NestedMeta","Element of a compile-time attribute list."],["Pat","A pattern in a local binding, function signature, match expression, or various other places."],["PathArguments","Angle bracketed or parenthesized arguments of a path segment."],["RangeLimits","Limit types of a range, inclusive or exclusive."],["ReturnType","Return type of a function signature."],["Stmt","A statement, usually ending in a semicolon."],["StrStyle","The style of a string literal, either plain quoted or a raw string like `r##\"data\"##`."],["TraitBoundModifier","A modifier on a trait bound, currently only used for the `?` in `?Sized`."],["TraitItem","An item declaration within the definition of a trait."],["Type","The possible types that a Rust value could have."],["TypeParamBound","A trait or lifetime used as a bound on a type parameter."],["UnOp","A unary operator: `*`, `!`, `-`."],["UseTree","A suffix of an import tree in a `use` item: `Type as Renamed` or `*`."],["Visibility","The visibility level of an item: inherited or `pub` or `pub(restricted)`."],["WherePredicate","A single predicate in a `where` clause: `T: Deserialize<'de>`."]],"fn":[["parse","Parse tokens of source code into the chosen syntax tree node."],["parse2","Parse a proc-macro2 token stream into the chosen syntax tree node."],["parse_file","Parse the content of a file of Rust code."],["parse_str","Parse a string of Rust code into the chosen syntax tree node."]],"macro":[["Token","A type-macro that expands to the name of the Rust type representation of a given token."],["alt","Run a series of parsers, returning the result of the first one which succeeds."],["braces","Parse inside of `{` `}` curly braces."],["brackets","Parse inside of `[` `]` square brackets."],["call","Invoke the given parser function with zero or more arguments."],["cond","Execute a parser only if a condition is met, otherwise return None."],["cond_reduce","Execute a parser only if a condition is met, otherwise fail to parse."],["do_parse","Run a series of parsers, optionally naming each intermediate result, followed by a step to combine the intermediate results."],["epsilon","Parses nothing and always succeeds."],["input_end","Parse nothing and succeed only if the end of the enclosing block has been reached."],["keyword","Parse a single Rust keyword token."],["many0","Parse zero or more values using the given parser."],["map","Transform the result of a parser by applying a function or closure."],["named","Define a parser function with the signature expected by syn parser combinators."],["not","Invert the result of a parser by parsing successfully if the given parser fails to parse and vice versa."],["option","Turn a failed parse into `None` and a successful parse into `Some`."],["parens","Parse inside of `(` `)` parentheses."],["parse_quote","Quasi-quotation macro that accepts input like the [`quote!`] macro but uses type inference to figure out a return type for those tokens."],["punct","Parse a single Rust punctuation token."],["reject","Unconditionally fail to parse anything."],["switch","Pattern-match the result of a parser to select which other parser to run."],["syn","Parse any type that implements the `Synom` trait."],["tuple","Run a series of parsers and produce all of the results in a tuple."],["value","Produce the given value without parsing anything."]],"mod":[["buffer","A stably addressed token buffer supporting efficient traversal based on a cheaply copyable cursor."],["fold","Syntax tree traversal to transform the nodes of an owned syntax tree."],["punctuated","A punctuated sequence of syntax tree nodes separated by punctuation."],["spanned","A trait that can provide the `Span` of the complete contents of a syntax tree node."],["synom","Parsing interface for parsing a token stream into a syntax tree node."],["token","Tokens representing Rust punctuation, keywords, and delimiters."]],"struct":[["Abi","The binary interface of a function: `extern \"C\"`."],["AngleBracketedGenericArguments","Angle bracketed arguments of a path segment: the `<K, V>` in `HashMap<K, V>`."],["ArgCaptured","An explicitly typed pattern captured by a function signature."],["ArgSelf","Self captured by value in a function signature: `self` or `mut self`."],["ArgSelfRef","Self captured by reference in a function signature: `&self` or `&mut self`."],["Arm","One arm of a `match` expression: `0...10 => { return true; }`."],["Attribute","An attribute like `#[repr(transparent)]`."],["BareFnArg","An argument in a function type: the `usize` in `fn(usize) -> bool`."],["Binding","A binding (equality constraint) on an associated type: `Item = u8`."],["Block","A braced block containing Rust statements."],["BoundLifetimes","A set of bound lifetimes: `for<'a, 'b, 'c>`."],["ConstParam","A const generic parameter: `const LENGTH: usize`."],["DataEnum","An enum input to a `proc_macro_derive` macro."],["DataStruct","A struct input to a `proc_macro_derive` macro."],["DataUnion","A tagged union input to a `proc_macro_derive` macro."],["DeriveInput","Data structure sent to a `proc_macro_derive` macro."],["ExprAddrOf","A referencing operation: `&a` or `&mut a`."],["ExprArray","A slice literal expression: `[a, b, c, d]`."],["ExprAssign","An assignment expression: `a = compute()`."],["ExprAssignOp","A compound assignment expression: `counter += 1`."],["ExprBinary","A binary operation: `a + b`, `a * b`."],["ExprBlock","A blocked scope: `{ ... }`."],["ExprBox","A box expression: `box f`."],["ExprBreak","A `break`, with an optional label to break and an optional expression."],["ExprCall","A function call expression: `invoke(a, b)`."],["ExprCast","A cast expression: `foo as f64`."],["ExprCatch","A catch expression: `do catch { ... }`."],["ExprClosure","A closure expression: `|a, b| a + b`."],["ExprContinue","A `continue`, with an optional label."],["ExprField","Access of a named struct field (`obj.k`) or unnamed tuple struct field (`obj.0`)."],["ExprForLoop","A for loop: `for pat in expr { ... }`."],["ExprGroup","An expression contained within invisible delimiters."],["ExprIf","An `if` expression with an optional `else` block: `if expr { ... } else { ... }`."],["ExprIfLet","An `if let` expression with an optional `else` block: `if let pat = expr { ... } else { ... }`."],["ExprInPlace","A placement expression: `place <- value`."],["ExprIndex","A square bracketed indexing expression: `vector[2]`."],["ExprLit","A literal in place of an expression: `1`, `\"foo\"`."],["ExprLoop","Conditionless loop: `loop { ... }`."],["ExprMacro","A macro invocation expression: `format!(\"{}\", q)`."],["ExprMatch","A `match` expression: `match n { Some(n) => {}, None => {} }`."],["ExprMethodCall","A method call expression: `x.foo::<T>(a, b)`."],["ExprParen","A parenthesized expression: `(a + b)`."],["ExprPath","A path like `std::mem::replace` possibly containing generic parameters and a qualified self-type."],["ExprRange","A range expression: `1..2`, `1..`, `..2`, `1..=2`, `..=2`."],["ExprRepeat","An array literal constructed from one repeated element: `[0u8; N]`."],["ExprReturn","A `return`, with an optional value to be returned."],["ExprStruct","A struct literal expression: `Point { x: 1, y: 1 }`."],["ExprTry","A try-expression: `expr?`."],["ExprTuple","A tuple expression: `(a, b, c, d)`."],["ExprType","A type ascription expression: `foo: f64`."],["ExprUnary","A unary operation: `!x`, `*x`."],["ExprUnsafe","An unsafe block: `unsafe { ... }`."],["ExprVerbatim","Tokens in expression position not interpreted by Syn."],["ExprWhile","A while loop: `while expr { ... }`."],["ExprWhileLet","A while-let loop: `while let pat = expr { ... }`."],["ExprYield","A yield expression: `yield expr`."],["Field","A field of a struct or enum variant."],["FieldPat","A single field in a struct pattern."],["FieldValue","A field-value pair in a struct literal."],["FieldsNamed","Named fields of a struct or struct variant such as `Point { x: f64, y: f64 }`."],["FieldsUnnamed","Unnamed fields of a tuple struct or tuple variant such as `Some(T)`."],["File","A complete file of Rust source code."],["FnDecl","Header of a function declaration, without including the body."],["ForeignItemFn","A foreign function in an `extern` block."],["ForeignItemStatic","A foreign static item in an `extern` block: `static ext: u8`."],["ForeignItemType","A foreign type in an `extern` block: `type void`."],["ForeignItemVerbatim","Tokens in an `extern` block not interpreted by Syn."],["Generics","Lifetimes and type parameters attached to a declaration of a function, enum, trait, etc."],["Ident","A word of Rust code, which may be a keyword or legal variable name."],["ImplGenerics","Returned by `Generics::split_for_impl`."],["ImplItemConst","An associated constant within an impl block."],["ImplItemMacro","A macro invocation within an impl block."],["ImplItemMethod","A method within an impl block."],["ImplItemType","An associated type within an impl block."],["ImplItemVerbatim","Tokens within an impl block not interpreted by Syn."],["Index","The index of an unnamed tuple struct field."],["ItemConst","A constant item: `const MAX: u16 = 65535`."],["ItemEnum","An enum definition: `enum Foo<A, B> { C<A>, D<B> }`."],["ItemExternCrate","An `extern crate` item: `extern crate serde`."],["ItemFn","A free-standing function: `fn process(n: usize) -> Result<()> { ... }`."],["ItemForeignMod","A block of foreign items: `extern \"C\" { ... }`."],["ItemImpl","An impl block providing trait or associated items: `impl<A> Trait for Data<A> { ... }`."],["ItemMacro","A macro invocation, which includes `macro_rules!` definitions."],["ItemMacro2","A 2.0-style declarative macro introduced by the `macro` keyword."],["ItemMod","A module or module declaration: `mod m` or `mod m { ... }`."],["ItemStatic","A static item: `static BIKE: Shed = Shed(42)`."],["ItemStruct","A struct definition: `struct Foo<A> { x: A }`."],["ItemTrait","A trait definition: `pub trait Iterator { ... }`."],["ItemType","A type alias: `type Result<T> = std::result::Result<T, MyError>`."],["ItemUnion","A union definition: `union Foo<A, B> { x: A, y: B }`."],["ItemUse","A use declaration: `use std::collections::HashMap`."],["ItemVerbatim","Tokens forming an item not interpreted by Syn."],["Label","A lifetime labeling a `for`, `while`, or `loop`."],["Lifetime","A Rust lifetime: `'a`."],["LifetimeDef","A lifetime definition: `'a: 'b + 'c + 'd`."],["LitBool","A boolean literal: `true` or `false`."],["LitByte","A byte literal: `b'f'`."],["LitByteStr","A byte string literal: `b\"foo\"`."],["LitChar","A character literal: `'a'`."],["LitFloat","A floating point literal: `1f64` or `1.0e10f64`."],["LitInt","An integer literal: `1` or `1u16`."],["LitStr","A UTF-8 string literal: `\"foo\"`."],["LitVerbatim","A raw token literal not interpreted by Syn, possibly because it represents an integer larger than 64 bits."],["Local","A local `let` binding: `let x: u64 = s.parse()?`."],["Macro","A macro invocation: `println!(\"{}\", mac)`."],["MetaList","A structured list within an attribute, like `derive(Copy, Clone)`."],["MetaNameValue","A name-value pair within an attribute, like `feature = \"nightly\"`."],["MethodSig","A method's signature in a trait or implementation: `unsafe fn initialize(&self)`."],["MethodTurbofish","The `::<>` explicit type parameters passed to a method call: `parse::<u64>()`."],["ParenthesizedGenericArguments","Arguments of a function path segment: the `(A, B) -> C` in `Fn(A,B) -> C`."],["PatBox","A box pattern: `box v`."],["PatIdent","A pattern that binds a new variable: `ref mut binding @ SUBPATTERN`."],["PatLit","A literal pattern: `0`."],["PatMacro","A macro in expression position."],["PatPath","A path pattern like `Color::Red`, optionally qualified with a self-type."],["PatRange","A range pattern: `1..=2`."],["PatRef","A reference pattern: `&mut (first, second)`."],["PatSlice","A dynamically sized slice pattern: `[a, b, i.., y, z]`."],["PatStruct","A struct or struct variant pattern: `Variant { x, y, .. }`."],["PatTuple","A tuple pattern: `(a, b)`."],["PatTupleStruct","A tuple struct or tuple variant pattern: `Variant(x, y, .., z)`."],["PatVerbatim","Tokens in pattern position not interpreted by Syn."],["PatWild","A pattern that matches any value: `_`."],["Path","A path at which a named item is exported: `std::collections::HashMap`."],["PathSegment","A segment of a path together with any path arguments on that segment."],["PathTokens","A helper for printing a self-type qualified path as tokens."],["PredicateEq","An equality predicate in a `where` clause (unsupported)."],["PredicateLifetime","A lifetime predicate in a `where` clause: `'a: 'b + 'c`."],["PredicateType","A type predicate in a `where` clause: `for<'c> Foo<'c>: Trait<'c>`."],["QSelf","The explicit Self type in a qualified path: the `T` in `<T as Display>::fmt`."],["TraitBound","A trait used as a bound on a type parameter."],["TraitItemConst","An associated constant within the definition of a trait."],["TraitItemMacro","A macro invocation within the definition of a trait."],["TraitItemMethod","A trait method within the definition of a trait."],["TraitItemType","An associated type within the definition of a trait."],["TraitItemVerbatim","Tokens within the definition of a trait not interpreted by Syn."],["Turbofish","Returned by `TypeGenerics::as_turbofish`."],["TypeArray","A fixed size array type: `[T; n]`."],["TypeBareFn","A bare function type: `fn(usize) -> bool`."],["TypeGenerics","Returned by `Generics::split_for_impl`."],["TypeGroup","A type contained within invisible delimiters."],["TypeImplTrait","An `impl Bound1 + Bound2 + Bound3` type where `Bound` is a trait or a lifetime."],["TypeInfer","Indication that a type should be inferred by the compiler: `_`."],["TypeMacro","A macro in the type position."],["TypeNever","The never type: `!`."],["TypeParam","A generic type parameter: `T: Into<String>`."],["TypeParen","A parenthesized type equivalent to the inner type."],["TypePath","A path like `std::slice::Iter`, optionally qualified with a self-type as in `<Vec<T> as SomeTrait>::Associated`."],["TypePtr","A raw pointer type: `*const T` or `*mut T`."],["TypeReference","A reference type: `&'a T` or `&'a mut T`."],["TypeSlice","A dynamically sized slice type: `[T]`."],["TypeTraitObject","A trait object type `Bound1 + Bound2 + Bound3` where `Bound` is a trait or a lifetime."],["TypeTuple","A tuple type: `(A, B, C, String)`."],["TypeVerbatim","Tokens in type position not interpreted by Syn."],["UseGlob","A glob import in a `use` item: `*`."],["UseList","A braced list of imports in a `use` item: `{A, B, C}`."],["UsePath","An identifier imported by a `use` item: `Type` or `Type as Renamed`."],["Variant","An enum variant."],["VisCrate","A crate-level visibility: `pub(crate)`."],["VisPublic","A public visibility level: `pub`."],["VisRestricted","A visibility level restricted to some path: `pub(self)` or `pub(super)` or `pub(in some::module)`."],["WhereClause","A `where` clause in a definition: `where T: Deserialize<'de>, D: 'static`."]]});