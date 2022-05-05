# Front_end_mini

User :
tampa authorize : - dapat melihat product tampa login - dapat register tampa login (add user)
authorize : - dapat login - dapat edit profile sendiri dan user lain - dapat hapus user - dapat edit product - dapat tambah product - dapat hapus product

Back end Stack
 - Mysql database
 - ORM sequelize 
 - Nodejs - express 
 - jwt 
 - cookie-parser 
 - bicrypt

Front end Stack 
 - reactjs 
 - redux-toolkit (state management) 
 - react-router 
 - react-redux 
 - react-bootsrap

cara menjalankan server 
- npm run dev

cara menjalankan front-end
-npm start

Keterangan :
    Backend
        Terdapata beberapa api dan endpoint yang dapat di consume front end, dengan menggunakan json web token sebagai token authentifikasi user. Untuk token sendiri terdapat 2 yaitu access token dan refresh token.

        Access token berfungsi untuk melakuakn authentifikasi login sedangkan refreshtoken berfungsi untuk merefresh access token baru jika access token sudah exp

        tujuannnya agar token lebih aman dan terus berubah ubah. Untuk access token akan expire selama 30 detik pada saat setelah user login dan berikan access token baru oleh refresh token selama user login

        Refreshtoken memiliki masa umur selama 1 hari dan jika sudah exp maka user harus melakuakn login ulang

    Front End
        Menggunakan redux-toolkit sebagai state management sehingga aplikasi akan lebih mudah di scale dan lebih flexible pada saat melakukan parsing component, fungsi, dan state(contoh : child component dapat mengakses grandparant state tampa melalui parent component)

        Untuk accestoken di store di dalam aplikasi itu sendiri (di statenya) tidak di store di cookies, session storage dan local storage sehingga token tidak dapat di akses dari sisi manapun kecuali back end

Kekurangan dan mmebutuhkan imporovisasi 
    - Karena menggunakan redux-toolkit sebagai state management maka pada saat melakukan validasi token useState akan di render sebanyak 2 kali yang mana pada rendering ke 2 menimbulkan error pada access token.

    Ini mengakibatkan akan ada beberapa bug yang terjadi contoh tidak dapat digabung 2 api endpoint dalam 1 route karena pengeksekusian token terjadi 2 kali sehingga component yang terlihat adalah component paling akhir(sudah mencoba asyncronous function tetap tidak bisa)

    - Tidak di ketahui apakah user sudah login atau belum sehingga ada beberapa page yang dapat diakses componentnya namun tidak fungsinya seperti update component

PR yang sedang di cari tahu 
    - Menemukan cara agar rendering useEffect hanya dilakuakn satu kali pada saat menggunakan state management

    - Bagai mana cara meredirect user yang belum login sehingga dia tidak dapat mengakses page yang mewajibkan login
