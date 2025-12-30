// src/components/SmartSupp.js
import React, { useEffect } from 'react';

const SmartSupp = () => {
  useEffect(() => {
    // Avoid adding the script multiple times
    if (window.smartsupp) return;

    // Smartsupp initialization script
    const initScript = document.createElement('script');
    initScript.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = '5eae8d72e0306c7ed34eba6a6a8b668d07f1d41c';
      window.smartsupp||(function(d){
        var s,c,o=smartsupp=function(){ o._.push(arguments)};
        o._=[];
        s=d.getElementsByTagName('script')[0];
        c=d.createElement('script');
        c.type='text/javascript';
        c.charset='utf-8';
        c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';
        s.parentNode.insertBefore(c,s);
      })(document);
    `;
    document.body.appendChild(initScript);
  }, []);

  return null; 
};

export default SmartSupp;
