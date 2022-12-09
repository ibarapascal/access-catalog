---
title: Canvas Image CORS Issue
time: August 2022
corporation: WhaleFin Technologies Japan
---

The required feature is to load an S3 image to edit in the browser, then upload the edited one.  

The edit operation could be adding a mask for part of the image.  

We used [konva](https://github.com/konvajs/konva), [react-konva](https://github.com/konvajs/react-konva) to achieve it.  

## Problem

First, we need to load the original image as a DOM element into Canvas, we used [use-image](https://github.com/konvajs/use-image)  

```tsx
import useImage from 'use-image';

const [image] = useImage(imageUrl);
```

We instantly faced the CORS issue, after the ops updated the header options for the AWS S3 bucket, however, the problem existed.  

We thought adding the `crossorigin` props `anonymous` could help but with no luck.  

```tsx
const [image] = useImage(imageUrl, 'anonymous');
```

After some tests, we found that the CORS error won't appear only if it's the first time seeing that image, this quickly leads us to think about the problem of **cache**.  

The browser would auto-cache the resources including the images of couse, but if we read the image as a DOM element to use in Canvas, later on, the second request that went to the cache would cause an unexpected CORS error!  

ref: https://stackoverflow.com/a/37455118/11872246

## Solution

All the solutions lead us to think about not using the cached image.  

To achieve this, we quickly came to the thought that we can simply request it once more when we are using the image as a DOM element.

```tsx
export default function ImageEditor({
  imageUrl,
  ...props
}: ImageEditorProps) {

  const [acquiredImageUrl, setAcquiredImageUrl] = useState<string>('');
  const [image] = useImage(acquiredImageUrl, 'anonymous');

  useEffect(() => {
    const acquireUsedImage = async () => {
      const res = await request.getImage(imageUrl);
      const url = URL.createObjectURL(res.data);
      setAcquiredImageUrl(url);
    };
    !acquiredImageUrl && imageUrl && acquireUsedImage();
  }, [acquiredImageUrl, imageUrl]);

  ...
  return (
    ...
  )
}
```

Still it won't work, finally, we noticed that we forgot to add the `no-cache` header for that new request.  

```ts
  getImage<T = any>(url: string): AxiosPromise<T> {
    return service({
      method: 'get',
      url: `${window.location.protocol}//${url?.split('://')?.[1]}`,
      headers: { 'Cache-Control': 'no-cache' },
      responseType: 'blob',
    });
  },
```

Notice that the we modified the URL to keep the same protocol under `http` and `https` to prevent being blocked.  

After that, the image could be loaded normally and that's the end of this story!
