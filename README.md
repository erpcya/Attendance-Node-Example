## Attendance Node Example
Just a example using server for get attendance command

### Build

```Shell
yarn
```

### Run

```Shell
yarn start server.js
```

### Result
```Javascript
***************************************
Header:  {
  accept: 'image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/vnd.ms-excel, application/msword, application/vnd.ms-powerpoint, */*',
  'accept-language': 'en-us',
  'accept-encoding': 'gzip, deflate',
  'user-agent': 'Mozilla/4.0',
  'content-type': 'application/octet-stream',
  'content-length': '223',
  connection: 'close',
  request_code: 'receive_cmd',
  dev_id: '2022085383',
  blk_no: '0',
  blk_len: '223',
  host: '20.12.0.23'
}
Data:  <Buffer db 00 00 00 7b 22 66 6b 5f 6e 61 6d 65 22 3a 22 22 2c 22 66 6b 5f 74 69 6d 65 22 3a 22 32 30 32 33 30 32 31 36 31 31 35 34 34 37 22 2c 22 66 6b 5f 69 ... 173 more bytes>
***************************************
```