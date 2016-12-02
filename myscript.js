//Another fork of the original Cloud to Butt extension (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bmigrant\b/g, "person");
	v = v.replace(/\bmigrants\b/g, "people");
	v = v.replace(/\bMigrant\b/g, "Person");
	v = v.replace(/\bMigrants\b/g, "People");
	v = v.replace(/\bflood of migrants\b/g, "people seeking safety or a better life");
	v = v.replace(/\bFlood of migrants\b/g, "People seeking safety");
	
	textNode.nodeValue = v;
}
