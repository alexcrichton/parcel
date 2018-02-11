(module
 (type $0 (func (result i32)))
 (type $1 (func (result i32)))
 (import "./get.js" "get" (func $import$0 (result i32)))
 (table 0 anyfunc)
 (memory $0 17)
 (export "memory" (memory $0))
 (export "add_one" (func $0))
 (func $0 (; 1 ;) (type $0) (result i32)
  (i32.add
   (call $import$0)
   (i32.const 1)
  )
 )
)

