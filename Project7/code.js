const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>${e.keycode}</td>
    <td>${e.key==''?'Space':e.key}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>`
})