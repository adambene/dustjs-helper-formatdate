# Date formatting helper for Dust.js

## For Node.js
```javascript
var dust = require('dustjs-linkedin');
require('dustjs-helpers');
require('dustjs-helper-formatdate');
```

## For the browser
```html
<script src="/js/dust.js"></script>
<script src="/js/moment.js"></script>
<script src="/js/dustjs-helper-formatdate.js"></script>
```

## Use in Dust template
```html
<time>
    {@formatDate date="{myDate}" format="YYYY. MMMM Do HH:mm" lan="en-US"/}
</time>
```

or with Dust keys:

```html
<time>
    {@formatDate date="{myDate}" format="{formatString}" lan="{locale}"/}
</time>
```

# License
MIT license