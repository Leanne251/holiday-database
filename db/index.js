import pg from 'pg';

import configdb from '../config.js';

const pool = new pg.Pool(configdb);

export default function query(text, params) {
	return pool.query(text, params);
}
