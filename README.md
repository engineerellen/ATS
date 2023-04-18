How to test this application?

to run backend:
1 - in appsettings.json file, type your sql server connection 
2- Exclude all files inside Migrations folder
2 - open visual studio nuget console
3- type Add-Migration Migrations Folder
4- type Update-Database
5 - press f5 to run this app

to run frontend:
1 - install last node package version
2 - install last angular package version
3 - open vs code
4 - open vs code powershell terminal
5 - copy frontend folder (..\projetosAngular\oiga)in a separated folder
6- open this new separeted folder in this terminal
7 - type npm install bootstrap --save
8 -type npm install
9- type npm run ng serve
10 - angular will show you the localhost link
11 - type this link in a browser
12 - complete this link with \evaluation\index
