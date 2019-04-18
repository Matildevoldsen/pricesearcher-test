<?php

namespace Tests\Unit;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PhotoTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testCreatePhoto()
    {
        Storage::fake('local');

        $response = $this->json('POST', '/api/photos/', [
            'description' => 'wj',
            'photo_path' => UploadedFile::fake()->image('avatar.jpg')
        ]);

        $response->assertStatus(200);
    }

    public function testGetAllPhotos()
    {
        $response = $this->json('GET', '/api/photos');
        $response->assertStatus(200);
    }
}
