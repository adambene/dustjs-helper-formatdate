# Date formatting helper for Dust.js

```javascript
var dust = require('dustjs-linkedin');
require('dustjs-helpers');
require('dustjs-helper-formatdate')(dust);
```

```html
<time>
    {@formatDate date="{myDate}" format="YYYY. MMMM Do HH:mm" lan="en-US"/}
</time>
```

or

```html
<time>
    {@formatDate date="{myDate}" format="{formatString}" lan="{locale}"/}
</time>
```

# License
MIT license