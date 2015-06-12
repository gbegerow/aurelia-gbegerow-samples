# Aurelia on Azure Websites

Just as a quick reminder to myself how to get an azure website with aurelia running:

* Create folder for application
```shell
md my-aurelia-app; cd my-aurelia-app
```
* init skeleton with Yeoman (or aurelia cli if available)
```shell
yo aurelia 
```
* Create local repository for application with  
```shell
git init
```

* Build and test local app

* Commit to git 
```shell
git commit -m "Initial Release" 
```

* Create Azure Website on [Azure Portal](https://manage.windowsazure.com/) 
and connect with local repository (copy command starting with 'git remote add azure https://' from website to create an alias for target 
repository on Azure)
```shell
git push master azure
```

* push master to azure
```shell
git push master azure
```

* Enable Visual Studio Online

* Enter VSO and open console

* Follow standard procedure
```shell
  npm install
  ```
* Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
* Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts.
* Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```