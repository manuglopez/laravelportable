--TEST--
Request #50698_4 (SoapClient should handle wsdls with some incompatible endpoints)
--EXTENSIONS--
soap
--INI--
soap.wsdl_cache_enabled=0
--FILE--
<?php
new SoapClient(__DIR__ . '/bug50698_4.wsdl');
echo "ok\n";
?>
--EXPECT--
ok
