function genProgressBar(pre)
{
	var bar = ''; 		// data
	var x 	= 16; 		// length
	var b   = 100/x; 	// block value
	var bl 	= b/3;
	var d;
	for(var i=1; i<=x; i++)
	{
		if((i*b) > pre)
		{
			p = i*b; // precentage step
			// load empty blocks
			d = b-(p-pre);
			document.write('(d['+d+'] <> bl['+bl+'])<br>');
			// empty level 1
			if(d < bl)
				bar += '░';
			// empty level 2
			else if(d >= bl && d <= (bl*2))
				bar += '▒';
			// empty level 3
			else if(d > (bl*2))
				bar += '▓';
		}
		// load full blocks
		else
			bar += '█';
	}
	document.write(bar);
}

function genProgressBarTest()
{
	for(var i=0; i<=100; i++)
	{
		genProgressBar(i);
		document.write(i+'<br>');
	}
}