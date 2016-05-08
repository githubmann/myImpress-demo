## 用cfs-ui来diplay collectionFs(standard package) 上传的图片
``` js
    {{#with FS.GetFile collectionName id}}
      In here, we can use the FS.File instance methods that work as helpers, such as {{url}} or {{isImage}}
    {{/with}}
```
- 例如
``` js
    {{#with FS.GetFile "images" selectedImageId}}
        <img src="{{this.url store='thumbnails'}}" alt="">
    {{/with}}
```
在之前
``` js
    {{#each images}}
      <div>
        <a href="{{this.url}}" target="_blank"><img src="{{this.url store='thumbs' uploading='/images/uploading.gif' storing='/images/storing.gif'}}" alt="" class="thumbnail" /></a>
      </div>
    {{/each}}
```