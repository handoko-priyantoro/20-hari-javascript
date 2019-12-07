# Pertemuan-1

##CARA MENDAFTAR AKUN GITHUB
1.  Buka halam web www.github.com dengan menggunakan browser, lalu pilih menu Sign up for GitHub.
2.  Masukkan data pada form, setelah selesai klik "verify"  untuk memverifikasi akun yang akan dibuat.
3.  Pilih menu "Chose your plan" lalu pilih individual untuk membuat akun individu
4.  Selamat Anda telah berhasil membuat akun di github.com. Periksa email Anda dan lakukan verifikasi akun github untuk mengaktifkannya.

## SETUP SSH GITHUB
SSH dilakukan agar kita dapat melakukan push file ke repository tanpa melakukan login. Berbeda dengan cara biasa (melalui HTTPS),kita harus login terlebih dahulu untuk melakukan push file. Berikut adalah langkah-langkah untuk melakukan Setup SSH Github :

1.  Masuk ke terminal.
2.  Pastikan di komputer telah ada sebuah directory bernama ssh 
3.  Di terminal, ketikkan perintah $ cd ~/.ssh (karakter ~/. digunakan untuk masuk ke hiden directory).
4.  Jika belum ada directory `/.ssh ketikkan perintah berikut untuk membuatnya! $mkdir ~/.ssh
5.  Segera masuk masuk ke direcory ~/.ssh untuk membuat ssh key dengan mengetikkan perintah $ssh-keygen -t rsa -b 4096 "emailkamu@email.com".
6.  Selanjutnya kita diminta untuk mengisi id SSH "id" dan passphrasenya. Passphrase dapat dikosongkan.
7.  Saat ini di dalam folder ssh akan muncul 2 file baru dengan nama sesuai dengan id yang kita masukkan tadi.
8.  Untuk melihat isi folder ssh, ketikkan perintah $ls
9.  File dengan extension .pub adalah public key nya dan file tanpa extension adalah private key nya. Yang akan dipergunakan adalah public keynnya. Selanjutnya kita ambil isi dari public key tadi.
10. Di terminal ketikkan perintah berikut : $cat id_rsa.pub
11. Kemudian lakukan copy text dari public key tadi, dan paste pada akun github Anda.
12. Login ke github.com, pilih menu Setting => SSH and GPG keys, buat kunci baru dengan memilih menu SSH key. Lalu masukkan key yang sudah dibuat, dan klik tombol Add SSH key.
13. Kembali ke terminal, ketik perintah berikut untuk menguji konektifitas komputer ke github.com. $ssh -T git@github.com
14. Pesan berikut akan muncul jika jika proses berhasil $Hi handoko-priyantoro! You've successfully authenticated, but GitHub does not provide shell access.
15. Jika pesan yang muncul $"permission denied" artinya SSH key belum berhasil di tambahkan. Kita harus menambahkannya terlebih dahulu. di terminal ketikkan perintah berikut: $ssh-add ~/.ssh/id_rsa.pub
16. Kemudian coba kembali koneksi SSH ke github. Jika sudah berhasil proses berikutnya adalah membuat Repository.

## MEMBUAT REPOSITORY DI GITHUB
1.  Masuk kembali ke github.com
2.  Pada dashboard, pilih tombol + (new) untuk menambahkan repository. Pada halaman create new repository, masukkan nama repository misalnya second-repo.
3.  Pilih public, centang pilihan initialize this repository witha README, dan klik tombol Create Repository. 

## CLONE REPOSITORY GITHUB.COM KE LOCAL COMPUTER
1.  Pilih repositor, misal second-repo.
2.  Klik tombol "Clone or Download" yang berwarna hijau.
3.  Secara default "Clone with SSH" sudah terpilih. Copy link SSH tersebut.
4.  Buka terminal. masuk ke folder tempat untuk meletakkan hasil clone. Lanjutkan dengan mengetikkan perintah $ git clone "link_ssh"($git clone git@github.com:handoko-priyantoro/second-repo.git)
5.  jika proses berhasil akan muncul pesan seperti berikut :
    Cloning into 'second-repo'...
    remote: Enumerating objects: 3, done.
    remote: Counting objects: 100% (3/3), done.
    remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
    Receiving objects: 100% (3/3), done.

## MELAKUKAN PUSH KE REMOTE REPOSITORY MELALUI SSH
Apabila kita malakukan perubahan pada repository kita dapat mengupdate repository local computer ke repository github.com dengan melakukan push. Langkah-langkahnya adalah sebagai berikut :
1.  Buatlah sebuah remote dengan perintah sbb $git remote add github "link ssh" (git@github.com:handoko-priyantoro/third-repo.git)
2.  Jika berhasil akan muncul pesan berikut jika kita ketikka $git remote -v
    github	git@github.com:handoko-priyantoro/third-repo.git (fetch)
    github	git@github.com:handoko-priyantoro/third-repo.git (push)
3.  Setelah proses remote berhasil kita dapat mengirimkan revisi/update  ke remote repository  dengan perintah sebagai berikut :
	$ git add .
    cek hasil nya dengan perintah 
	$git status
    Lakukan commit untuk melanjutkan dengan perintah
	$git commit -m "[Handoko]"pesan yang diberikan"

Selesaikan dengan mengirim hasil revisi dengan perintah sebagai berikut :
	$git push namaremote namabrach ($git push origin feature/handoko) 
