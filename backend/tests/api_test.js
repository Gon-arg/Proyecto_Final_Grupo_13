// tests/api_test.js
(async function(){
  const base = 'http://localhost:3001'
  try{
    console.log('--- REGISTER ---')
    let r = await fetch(base + '/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test_script@test.com', password: 'password123', nombre: 'Test Script' })
    })
    console.log('status', r.status)
    console.log(await r.text())
  } catch(err){
    console.error('register error', err.message)
  }

  try{
    console.log('\n--- LOGIN ---')
    let l = await fetch(base + '/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test_script@test.com', password: 'password123' })
    })
    const lj = await l.json().catch(()=>null)
    console.log('status', l.status)
    console.log(lj)
    const token = lj && lj.token
    if(!token){ console.error('no token, abort'); process.exit(1) }

    console.log('\n--- CREATE RECETA ---')
    let c = await fetch(base + '/api/recetas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ titulo: 'Prueba Script', descripcion: 'desc', tipo: 'almuerzo', instrucciones: 'hervir' })
    })
    console.log('status', c.status)
    console.log(await c.text())
  } catch(err){
    console.error('error', err.message)
  }
})();
