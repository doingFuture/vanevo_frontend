# Running Netlify CMS locally

uncomment lines 1 through 3 in _/src/admin/config.yml_ or add the following if there is no comment there.

```yaml
local_backend:
  # when using a custom proxy server port
  url: http://localhost:8082/api/v1
```

This will tell netlify-cms to use a local backend and look for a proxy running on port 8082. This is configured through environment variables shipped with this project, so it should work out of the box. Only thing required for it to work is to run the mentioned proxy via:

```shell
npx netlify-cms-proxy-server
```

Afterwards if you fired up the dev server via

```shell
gridsome develop
```

and visit http://localhost:8080/admin you should be able to login as normal, but instead of publishing content to the origin of the git repo, content should be only added locally. Only thing to be aware of is to not accidentally publishing the local posts by pushing them to the origin.
