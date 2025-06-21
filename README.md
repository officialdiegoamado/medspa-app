# SEA Salon App

SEA Salon App is a mobile application for salons that allows users to browse salon services, leave reviews, make reservations, and manage their accounts through an authentication system. The app is built using React Native and Supabase for authentication and real-time database integration.

## Features
 Home page displaying salon information and available services

 Customer review and rating system

 Reservation system for clients

 User authentication using Supabase

 Integration with Supabase’s real-time database for storing reviews and reservations
 
## Demo

https://github.com/volumeee/SEA-Salon-App/assets/57589007/6cdda083-c3d1-4432-9231-bdfb71b686a9



## Installation
Follow the steps below to install and run the app on your local environment.

### Prerequisites

- Node.js
- npm atau yarn
- Expo CLI atau React Native CLI

###  Installation Steps

1. **Clone this repository:**

   ```bash
   https://github.com/volumeee/SEA-Salon-App.git
   cd SEA-Salon-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Supabase:**

   Buat akun di [Supabase](https://supabase.io/), buat proyek baru, dan dapatkan URL dan Key API Anda. Buat file `.env` di root proyek dan tambahkan konfigurasi berikut:

   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   ```

4. **Jalankan aplikasi:**(⚠️pastikan sudah ada AVD atau install EXPO GO di playstore)

   Untuk menjalankan aplikasi di emulator atau perangkat fisik:

   ```bash
   npx expo start
   ```


## Run the app

### App Usage

Halaman utama menampilkan informasi tentang SEA Salon, layanan yang ditawarkan, dan detail kontak.

### Home Page

Pengguna dapat memberikan ulasan/rating dengan menambahkan nama mereka, rating (1-5), dan komentar. Ulasan ini akan ditampilkan di halaman utama.

###  Review System

Pengguna dapat membuat reservasi dengan mengisi nama, nomor telepon, jenis layanan, dan tanggal. Data reservasi disimpan di Supabase.

### Reservation System

Pengguna dapat mendaftar dan masuk menggunakan email dan kata sandi mereka. Otentikasi dilakukan menggunakan Supabase.

## User Authentication

```bash
.
├── src
│   ├── components
│   │   ├── home
│   │   │   ├── CategoriesList.tsx
│   │   │   ├── HairSpecialistList.tsx
│   │   ├── other
│   │   │   ├── CustomAlert.tsx
│   │   ├── profile
│   │   │   ├── Account.tsx
│   │   │   ├── Auth.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── SessionContext.tsx
│   │   ├── reservation
│   │   │   ├── HistoryDetail.tsx
│   │   │   ├── Transaction.tsx
│   │   │   ├── TransactionPayment.tsx
│   ├── Navigation
│   │   ├── BottomStackNavigation.tsx
│   │   ├── MainStackNavigation.tsx
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── ReservationScreen.tsx
│   │   ├── SplashScreen.tsx
│   ├── services
│   │   ├── supabase.ts
│   │   types
│   │   ├── env.d.ts
│   │   ├── NavigationTypes.ts
│   └── App.js
├── .env
└── etc..
```


### Contact

If you have any questions or suggestions, feel free to reach out: leadpowerup.com / support@leadpowerup.com
