<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guru = User::create([
            'name' => 'Guru',
            'email' => 'guru.jagoconfig@febriandfa.com',
            'role' => 'guru',
            'password' => bcrypt('guru123'),
        ]);
        $guru->assignRole('guru');

        $siswa = User::create([
            'name' => 'Siswa',
            'email' => 'siswa.jagoconfig@febriandfa.com',
            'kelas' => '12-TKJ 1',
            'absen' => '12',
            'role' => 'siswa',
            'password' => bcrypt('siswa123'),
        ]);
        $siswa->assignRole('siswa');
    }
}
