##CARA INSTALL GIT DAN KONFIGURASI AWAL YANG HARUS DILAKUKAN

1. Install git di linux ubuntu dapat dilakukan dengan perintah sebagai berikut
   sudo apt install git atau sudo apt-get install git
2. Setelah proses berhasil cek dengan perintah $git --version

##CONFIGURASI AWAL GIT
1. Lakukan konfigurasi user name dan user email git dengan perintah :
   $git config --global user.name "handoko"
   $git config --global user.email handoko.priyantoro@gmail.com
2. Kemudian cek hasil configurasi git dengan perintah
   $ git config --list
   jika berhasil akan muncul pesan sbb:
   user.email=handoko.priyantoro@gmail.com
   user.name=Handoko Priyantoro
   core.repositoryformatversion=0
   core.filemode=true
   core.bare=false
   core.logallrefupdates=true
   remote.github.url=git@github.com:handoko-priyantoro/third-repo.git
   remote.github.fetch=+refs/heads/*:refs/remotes/github/i*

3. Uninstall git di linux ubuntu dapat dilakukan dengan perintah sebagai berikut :
   - Uninstall git package dari ubuntu : $sudo apt-get remove git
   - Uninstall git dan depandent package : $sudo apt-get remove --auto-remove git
   - Purging git (uninstall dan menghapus configurasi dan/atau file git dari ubuntu :
     $sudo apt-get purge git
   - Untuk menghapus configurasi dan/atau data file dan dependencies dari ubuntu :
     $sudo apt-get purge --auto-remove git
