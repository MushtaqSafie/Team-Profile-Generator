const renderHTML = (m, e, s) => {
  let myHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    <style>
      .alert {
        margin-bottom: 0 !important;
      }
      .row > * {
        padding-right: 0 !important;
        padding-left: 0 !important;
        margin: 30px 10px 0px 10px !important;
      }
      .container {
        max-width: 1400px !important;
      }
      a {
        color: rgb(106, 106, 106);
        font-weight: 100;
        font-style: oblique;
      }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Team</a>
        <span class="navbar-text">Created by <a href="https://github.com/MushtaqSafie" target="_blank" class="navbar-link">Mushtaq Safie</a></span>
      </div>
    </nav>
    
    <div class="container">
      <div class="row">
        <div class="card col-sm-4" style="width: 20rem;">
          <div class="alert alert-danger">
            <h3><strong>${m[0].name}</strong></h3>
            <h3><i class="fas fa-user-tie"></i> ${m[0].role}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${m[0].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${m[0].email}?subject=Mail from My Team">${m[0].email}</a></li>
              <li class="list-group-item">Office Number: ${1}</li>
            </ul>
          </div>
        </div>`

  for (i = 0; i < e.length; i++) {
    let myEngieersCard = `<div class="card col-sm-4" style="width: 20rem;">
      <div class="alert alert-info">
        <h3><strong>${e[i].name}</strong></h3>
        <h3><i class="fas fa-user-cog"></i> ${e[i].role}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${e[i].id}</li>
          <li class="list-group-item">Email: <a href="mailto:${e[i].email}?subject=Mail from My Team">${e[i].email}</a></li>
          <li class="list-group-item">GitHub:  <a href="https://github.com/${e[i].github}/" target=”_blank”>${e[i].github}</a></li>
        </ul>
      </div>
    </div>`

    myHTML = myHTML.concat(myEngieersCard);
  };

  for (n = 0; n < s.length; n++) {
    let myInternsCard = `<div class="card col-sm-4" style="width: 20rem;">
      <div class="alert alert-success">
        <h3><strong>${s[n].name}</strong></h3>
        <h3><i class="fas fa-book-reader"></i> ${s[n].role}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${s[n].id}</li>
          <li class="list-group-item">Email: <a href="mailto:${s[n].email}?subject=Mail from My Team">${s[n].email}</a></li>
          <li class="list-group-item">School: ${s[n].school}</li>
        </ul>
      </div>
    </div>`

    myHTML = myHTML.concat(myInternsCard);
  };


  let htmlFooter = `</div> <!-- row -->
  </div> <!-- container -->
  </body>
  </html>`

  myHTML = myHTML.concat(htmlFooter);

  return myHTML
}


module.exports = renderHTML;