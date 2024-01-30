import Fastify from 'fastify';
import cookie from '@fastify/cookie';
import helmet from '@fastify/helmet';

const fastify = Fastify();

fastify.register(cookie);
fastify.register(helmet);