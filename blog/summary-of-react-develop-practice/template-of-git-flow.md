# Template of git flow

## Index

- [template of PR](#template-of-PR)

- [guideline of commit message](#guideline-of-commit-message)

- [PR labels](#PR-labels)

- [instructions of review](#instructions-of-review)

### template-of-PR  

```markdowm
### Before [PR_#151]()  

## Done (Review Points)  

Type implements  

1.add type definition for services  
2.move common validation processes to service  
3.update validation method type generated from constants  

## Todo:  

1.**Feature**: Planner open modal page need new params  
2.**Optimization**: quick tabs click still causing unnecessary requests  
3.**Bug**: Keyboard listener not working (getElementById not work)  

## API error check list

- [ ] 1.Product id 16, 17 **age selection** not fit => test link [No.1]() [No.2]()  
- [ ] 2.xxx  
```

### guideline-of-commit-message  

One of the following:

- Fix - for a bug fix.  
- Update - either for a backwards-compatible enhancement or for a rule change that adds reported problems.  
- New - implemented a new feature.  
- Breaking - for a backwards-incompatible enhancement or feature.  
- Docs - changes to documentation only.  
- Build - changes to build process only.  
- Upgrade - for a dependency upgrade.  
- Chore - for refactoring, adding tests, etc. (anything that isn't user-facing).  

Refer to Eslint contruibute guidance: [pull requests](https://eslint.org/docs/developer-guide/contributing/pull-requests)

### PR-labels  

Multiple of the following:  

- WIP  
- review  
- approved  
- dependencies  
- close  
- feature  
- bugfix  

### instructions-of-review  
