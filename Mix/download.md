<------------- What is Download.js! --------------------->
- The download() function is used to trigger a file download from JavaScript.

- It specifies the contents and name of a new file placed in the browser's download directory. The input can be a URL, 
  String, Blob, or Typed Array of data, or via a dataURL representing the file's data as base64 or url-encoded string. 
  No matter the input format, download() saves a file using the specified file name and mime information in the same 
  manner as a server using a Content-Disposition HTTP header.

(details here)[https://github.com/rndme/download]

```
// download vai NPM/Bower
$ npm install downloadjs --save-dev
$ bower install downloadjs
```

### Parameters
- data - The Blob, File, String, or dataURL containing the soon-to-be File's contents.
- strFileName - The name of the file to be created. Note that older browsers (like FF3.5, Ch5) don't honor the file name you provide, instead they automatically name the downloaded file.
- strMimeType - The MIME content-type of the file to download. While optional, it helps the browser present friendlier information about the download to the user, encouraging them to accept the download.

<---------------------------- example ------------------------------------>
```js
// html
<a class="btn btn-info tooltip-data" id="download-id" data-dl-data="{{ o.keyData }}" data-file-name="{{ o.fileName }}" data-toogle="tooltip" data-placement="top" title="Download" style="text-transform: none"><span class="glyphicon glyphicon-download"></span></a>
                    
// jQuery
<script>
    $('#download-id').on('click', (e) => {
                e.preventDefault();
                const keyHtml = $('#download-id');
                const dlData = keyHtml.data('dlData');
                const dlFileName = keyHtml.data('fileName');
                download(dlData, dlFileName);
    });
</script>
```
