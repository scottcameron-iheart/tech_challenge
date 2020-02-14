Create a React application that shows a table of songs with their information and metrics displayed by column (each row is a song, each column is a song attribute).

Requirements:

1. Take the included song data file and store it in an S3 bucket, then bring the data to the frontend using a lambda function.
2. Do **not** use table elements (table, th, tr, td, ...).
3. Include any necessary CSS but it doesn't need to be pretty.
4. Allow the user to scroll vertically and horizontally through columns and rows that go off screen.
5. Allow the user to sort the order of the song rows by the column values.
