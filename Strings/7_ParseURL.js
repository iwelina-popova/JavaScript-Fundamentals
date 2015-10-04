/*
 Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
 Return the elements in a JSON object.
 Example:

 URL	                                                           result
 http://telerikacademy.com/Courses/Courses/Details/239	       { protocol: http,
                                                           server: telerikacademy.com
                                                        resource: /Courses/Courses/Details/239
 */

console.log('--------------------------');
console.log('Problem 7. Parse URL');

var url = "http://telerikacademy.com/Courses/Courses/Details/212",
    protocol = getProtocol(url),
    server = getServer(url),
    resource = getResource(url, server);

console.log('Information about the URL address: ');
console.log('[protocol] = ' + protocol);
console.log('[server] = ' + server);
console.log('[resource] = ' + resource);

function getResource(url, server) {
 var resource = '',
     resourceStart = url.indexOf('/', server.length);

 resource = url.substr(resourceStart);

 return resource;
}

function getServer(url) {
 var server = '',
     serverBegin = url.indexOf("//") + 2,
     serverEnd = url.indexOf("/", serverBegin);

 server = url.substr(serverBegin, serverEnd - serverBegin);

 return server;
}

function getProtocol(url) {
 var protocol = '',
     protocolEnd = url.indexOf(':');

 protocol = url.substr(0, protocolEnd);

 return protocol;
}