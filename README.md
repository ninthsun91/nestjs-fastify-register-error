```
src/fastify.ts:7:18 - error TS2769: No overload matches this call.
  Overload 1 of 3, '(plugin: FastifyPluginCallback<FastifyCookieOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger>, opts?: FastifyRegisterOptions<...> | undefined): FastifyInstance<...> & PromiseLike<...>', gave the following error.
    Argument of type 'FastifyCookie' is not assignable to parameter of type 'FastifyPluginCallback<FastifyCookieOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger>'.
      Types of parameters 'instance' and 'instance' are incompatible.
        Type 'FastifyInstance<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProvider>' is missing the following properties from type 'FastifyInstance<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProviderDefault>': serializeCookie, parseCookie, signCookie, unsignCookie
  Overload 2 of 3, '(plugin: FastifyPluginAsync<FastifyCookieOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger>, opts?: FastifyRegisterOptions<...> | undefined): FastifyInstance<...> & PromiseLike<...>', gave the following error.
    Argument of type 'FastifyCookie' is not assignable to parameter of type 'FastifyPluginAsync<FastifyCookieOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger>'.
      Target signature provides too few arguments. Expected 3 or more, but got 2.
  Overload 3 of 3, '(plugin: FastifyPluginCallback<FastifyCookieOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger> | FastifyPluginAsync<...> | Promise<...> | Promise<...>, opts?: FastifyRegisterOptions<...> | undefined): FastifyInstance<...> & PromiseLike<...>', gave the following error.
    Argument of type 'FastifyCookie' is not assignable to parameter of type 'FastifyPluginCallback<FastifyCookieOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger> | FastifyPluginAsync<...> | Promise<...> | Promise<...>'.
      Type 'FastifyCookie' is not assignable to type 'FastifyPluginCallback<FastifyCookieOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger>'.

7 fastify.register(cookie);
                   ~~~~~~


src/fastify.ts:8:18 - error TS2769: No overload matches this call.
  Overload 1 of 3, '(plugin: FastifyPluginCallback<FastifyHelmetOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger>, opts?: FastifyRegisterOptions<...> | undefined): FastifyInstance<...> & PromiseLike<...>', gave the following error.
    Argument of type 'FastifyHelmet' is not assignable to parameter of type 'FastifyPluginCallback<FastifyHelmetOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger>'.
      Types of parameters 'instance' and 'instance' are incompatible.
        Type 'FastifyInstance<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProvider>' is not assignable to type 'FastifyInstance<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProviderDefault>'.
  Overload 2 of 3, '(plugin: FastifyPluginAsync<FastifyHelmetOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger>, opts?: FastifyRegisterOptions<...> | undefined): FastifyInstance<...> & PromiseLike<...>', gave the following error.
    Argument of type 'FastifyHelmet' is not assignable to parameter of type 'FastifyPluginAsync<FastifyHelmetOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger>'.
      Types of parameters 'instance' and 'instance' are incompatible.
        Type 'FastifyInstance<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProvider>' is not assignable to type 'FastifyInstance<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProviderDefault>'.
  Overload 3 of 3, '(plugin: FastifyPluginCallback<FastifyHelmetOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger> | FastifyPluginAsync<...> | Promise<...> | Promise<...>, opts?: FastifyRegisterOptions<...> | undefined): FastifyInstance<...> & PromiseLike<...>', gave the following error.
    Argument of type 'FastifyHelmet' is not assignable to parameter of type 'FastifyPluginCallback<FastifyHelmetOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger> | FastifyPluginAsync<...> | Promise<...> | Promise<...>'.
      Type 'FastifyHelmet' is not assignable to type 'FastifyPluginCallback<FastifyHelmetOptions, RawServerDefault, FastifyTypeProvider, FastifyBaseLogger>'.

8 fastify.register(helmet);
```