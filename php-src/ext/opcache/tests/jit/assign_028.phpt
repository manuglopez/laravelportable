--TEST--
JIT ASSIGN: 028
--INI--
opcache.enable=1
opcache.enable_cli=1
opcache.file_update_protection=0
opcache.jit_buffer_size=1M
opcache.protect_memory=1
;opcache.jit_debug=257
--EXTENSIONS--
opcache
--FILE--
<?php
function foo() {
  var_dump($i=1);
  return $i;
}
var_dump(foo());
?>
--EXPECT--
int(1)
int(1)
