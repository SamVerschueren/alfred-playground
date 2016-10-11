import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();

	const result = await alfy('rerum');

	t.deepEqual(result[0], {
		title: 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
		subtitle: 'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta',
		arg: 16
	});
});
