// src/components/TawkToChat.js
import React, { useEffect } from 'react';

const TawkToChat = () => {
    useEffect(() => {
        const tawkToScript = document.createElement('script');
        tawkToScript.src = 'https://embed.tawk.to/6639dde307f59932ab3cd491/1ht90lh5c';
        tawkToScript.async = true;
        document.head.appendChild(tawkToScript);

        return () => {
            document.head.removeChild(tawkToScript);
        };
    }, []);

    return null; // No need to render anything
};

export default TawkToChat;
