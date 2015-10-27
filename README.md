# Repo link here

https://github.com/Anthonyzou/ims-lti


# ims-lti repo link here

https://github.com/omsmith/ims-lti

# Basic run...

`meteor add anthonyzou:lti`

```coffeescript
MemoryStore = new lti.Stores.MemoryStore()
prov = new lti.Provider(@request.body.oauth_consumer_key, 'secret', MemoryStore)
```
