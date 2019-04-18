# Web test for pricesearcher
This is a project made for pricesearcher interview test.

## Tech stack

- Laravel
- Laravel Cors
- React
- Axios

This project uses SQLite to store the data in the database file inside `database/database.sqlite` and `test/database.sqlite` for testing purposes.

## Tests
Tests are written with PHPUnit to check the following in the code:

- If photo can be created and uploaded.
- If description can be set.
- Show all photos.

### Frontend

Run frontend by `cd frontend` and then run `yarn start` this will then run on port `3000`

### Backend

Run backend by `cd backend` and then run `php artisan serve` this will then run on port `8000`