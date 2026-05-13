import pymysql

# 加上這一行，手動指定版本號碼來騙過 Django
pymysql.version_info = (2, 2, 1, 'final', 0)

pymysql.install_as_MySQLdb()