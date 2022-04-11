type BoxUploadProps = {
  images: Function
}

export function BoxUpload(props: BoxUploadProps) {
  return (
    <div>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        multiple
        onChange={(event) => { props.images(event.target.files as any) }}
      />
    </div>
  )
}