const preventForm = () => {
  const form = document.querySelector('#form')
  form && (form.onsubmit = handleSubmit)
}

const handleSubmit = event => {
  event.preventDefault()
  const building = document.querySelector('#building').value
  const room = document.querySelector('#room').value

  const img = document.querySelector('#avatar')
  if (img) {
    img.parentElement.removeChild(img)
  }

  generateAvatar({
    buildingText: building,
    roomText: room,
  })
}

preventForm()

const generateAvatar = async params => {
  let topColor = params?.topColor || '#f2e352'
  let bottomColor = params?.bottomColor || '#1450cf'
  let borderColor = params?.borderColor || '#fff'
  let buildingText = params?.buildingText || '1#'
  let buildintTextColor = params?.buildintTextColor || ''
  let roomText = params?.roomText || '101'
  let roomTextColor = params?.roomTextColor || '#fff'

  // const canvas = document.querySelector('#canvas')
  const canvas = document.createElement('canvas')
  canvas.width = 400
  canvas.height = 400
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = topColor
  ctx.fillRect(0, 0, 400, 200)
  ctx.fillStyle = bottomColor
  ctx.fillRect(0, 200, 400, 200)

  ctx.strokeStyle = borderColor
  ctx.strokeRect(10.5, 10.5, 380, 380)
  ctx.lineJoin = 'round'
  ctx.strokeRect(9.5, 9.5, 382, 382)

  ctx.textAlign = 'center'
  ctx.font = '120px "Bangers"'
  ctx.fillStyle = buildintTextColor
  ctx.fillText(buildingText, 200, 160)
  ctx.fillStyle = roomTextColor
  ctx.fillText(roomText, 200, 340)

  const imgSection = document.querySelector('.img-section')

  const image = new Image()
  image.id = 'avatar'
  image.src = canvas.toDataURL('image/png')
  imgSection.appendChild(image)
}

document.fonts.ready.then(() => generateAvatar())
