# React + Vite
🔄 पूरा Flow एक कहानी में:

Bank = खजाना घर बनाया गया।

Village = गाँव जहाँ खजाना रखा गया और सब बच्चों को बाँटने के लिए Bank.Provider दिया गया।

gold state = गाँव का actual खजाना (100 coins)।

House = गाँव का बच्चा जिसने कहा "मुझे भी gold चाहिए।" उसने useContext(Bank) से सीधा gold निकाल लिया।

हर House को props से कुछ नहीं मिला → सबने सीधा Bank से लिया।
