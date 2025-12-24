const toggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.main-nav')
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open')
  })
}

function submitLead(e) {
  e.preventDefault()
  const form = e.target
  const data = Object.fromEntries(new FormData(form).entries())
  const message = `Thanks, ${data.name || 'there'}.\nWe will reach you soon at ${data.email || 'your email'}.`
  alert(message)
  form.reset()
  return false
}
