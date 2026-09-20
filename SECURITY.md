# Security Policy

## Supported versions

| Version | Supported |
| ------- | --------- |
| 1.2.x   | ✅        |
| < 1.2.0 | ❌        |

## Reporting a vulnerability

STIX2viz is a client-side visualisation library — it makes no network requests
and executes no STIX content as code. The highest-severity issues would be
XSS via STIX object content (labels, patterns, descriptions) rendered into the
DOM.

If you believe you have found a security vulnerability, please report it
privately via [GitHub Security Advisories](https://github.com/navaneeth001/STIX2viz/security/advisories/new) rather than
opening a public issue. Include a minimal STIX bundle that demonstrates the
issue.

You can expect an initial response within 7 days. Please do not disclose the
issue publicly until a fix is released.
