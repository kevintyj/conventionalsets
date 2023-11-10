import { expect, it } from 'vitest';
import logWithTile from '../src/log';

it('log with title and error to return the correct string', () => {
	expect(logWithTile('title', 'error')).toBe('title\n=====================\nerror');
});
