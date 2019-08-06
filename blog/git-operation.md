
### Github content reference

- githubusercontent

```html
https://github.com/
ibarapascal/ts-debug-in-vscode/
blob/master/README.md

https://raw.githubusercontent.com/
ibarapascal/ts-debug-in-vscode/
master/README.md
```

### Account

- [Git set your account combined to github](https://kbroman.org/github_tutorial/pages/first_time.html)

```shell
git config --global user.email <your_email@example.com>
git config --global user.name <Your name here>
```

### Repo

- [Clone a repo (duplicatiing)](https://help.github.com/en/articles/duplicating-a-repository)

```shell
git clone --bare https://github.com/<exampleuser>/<old-repository.git>
git push --mirror https://github.com/<exampleuser>/<new-repository.git>
```

### Branch

- [Delete a local/remote branch](http://www-creators.com/en/archives/4422)

```shell
git branch -d <branch name>
git push origin :<branch name>
```

### Commit

- [Revert a remote commit](https://stackoverflow.com/questions/8901542/how-to-delete-a-git-commit-from-log-like-it-had-never-existed)

```shell
git reset --hard HEAD^
git push -f
```

### Rebase & Merge

- [When to use rebase?]()

```shell
git rebase --onto <commitHash>^ <commitHash>
```

### Git-flow

![](https://img.scoop.it/mFCSgNSKkmh5omYEUXi2sIXXXL4j3HpexhjNOf_P3YmryPKwJ94QGRtDb3Sbc6KY)


