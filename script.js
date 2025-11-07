// Current user state
        let currentUser = {
            type: null,
            name: '',
            email: ''
        };

        // Language translations
        const translations = {
            en: {
                welcome: "Welcome to AgriConnect",
                chooseRole: "Choose your role to continue",
                farmer: "Farmer",
                farmerDesc: "Join the farming community, get expert advice, and buy quality products",
                shopkeeper: "Shopkeeper",
                shopkeeperDesc: "Sell agricultural products and manage your business efficiently",
                loginFarmer: "Login as Farmer",
                loginShopkeeper: "Login as Shopkeeper",
                back: "Back",
                farmerLogin: "Farmer Login",
                shopkeeperLogin: "Shopkeeper Login",
                emailAddress: "Email Address",
                businessEmail: "Business Email",
                password: "Password",
                enterEmail: "Enter your email",
                enterBusinessEmail: "Enter your business email",
                enterPassword: "Enter your password",
                loginSuccess: "Login successful! Redirecting to dashboard...",
                farmerDashboard: "Farmer Dashboard",
                welcomeDashboard: "Welcome to your agricultural community hub",
                community: "Community",
                weather: "Weather",
                trendingCrops: "Trending Crops",
                marketplace: "Marketplace",
                shopkeeperDashboard: "Shopkeeper Dashboard",
                manageBusiness: "Manage your agricultural business and connect with farmers",
                overview: "Overview",
                myProducts: "My Products",
                orders: "Orders",
                myProfile: "My Profile",
                settings: "Settings",
                notifications: "Notifications",
                helpSupport: "Help & Support",
                logout: "Logout"
            },
            hi: {
                welcome: "AgriConnect में आपका स्वागत है",
                chooseRole: "जारी रखने के लिए अपनी भूमिका चुनें",
                farmer: "किसान",
                farmerDesc: "कृषि समुदाय में शामिल हों, विशेषज्ञ सलाह प्राप्त करें, और गुणवत्तापूर्ण उत्पाद खरीदें",
                shopkeeper: "दुकानदार",
                shopkeeperDesc: "कृषि उत्पाद बेचें और अपने व्यवसाय को कुशलतापूर्वक प्रबंधित करें",
                loginFarmer: "किसान के रूप में लॉगिन करें",
                loginShopkeeper: "दुकानदार के रूप में लॉगिन करें",
                back: "वापस",
                farmerLogin: "किसान लॉगिन",
                shopkeeperLogin: "दुकानदार लॉगिन",
                emailAddress: "ईमेल पता",
                businessEmail: "व्यवसाय ईमेल",
                password: "पासवर्ड",
                enterEmail: "अपना ईमेल दर्ज करें",
                enterBusinessEmail: "अपना व्यवसाय ईमेल दर्ज करें",
                enterPassword: "अपना पासवर्ड दर्ज करें",
                loginSuccess: "लॉगिन सफल! डैशबोर्ड पर पुनर्निर्देशित किया जा रहा है...",
                farmerDashboard: "किसान डैशबोर्ड",
                welcomeDashboard: "अपने कृषि समुदाय हब में आपका स्वागत है",
                community: "समुदाय",
                weather: "मौसम",
                trendingCrops: "ट्रेंडिंग फसलें",
                marketplace: "बाज़ार",
                shopkeeperDashboard: "दुकानदार डैशबोर्ड",
                manageBusiness: "अपने कृषि व्यवसाय को प्रबंधित करें और किसानों से जुड़ें",
                overview: "अवलोकन",
                myProducts: "मेरे उत्पाद",
                orders: "ऑर्डर",
                myProfile: "मेरी प्रोफ़ाइल",
                settings: "सेटिंग्स",
                notifications: "सूचनाएं",
                helpSupport: "मदद और सहायता",
                logout: "लॉगआउट"
            },
            mr: {
                welcome: "AgriConnect मध्ये आपले स्वागत आहे",
                chooseRole: "सुरू ठेवण्यासाठी आपली भूमिका निवडा",
                farmer: "शेतकरी",
                farmerDesc: "शेती समुदायात सामील व्हा, तज्ञ सल्ला मिळवा आणि गुणवत्तापूर्ण उत्पादने खरेदी करा",
                shopkeeper: "दुकानदार",
                shopkeeperDesc: "कृषी उत्पादने विका आणि आपला व्यवसाय कार्यक्षमतेने व्यवस्थापित करा",
                loginFarmer: "शेतकरी म्हणून लॉगिन करा",
                loginShopkeeper: "दुकानदार म्हणून लॉगिन करा",
                back: "मागे",
                farmerLogin: "शेतकरी लॉगिन",
                shopkeeperLogin: "दुकानदार लॉगिन",
                emailAddress: "ईमेल पत्ता",
                businessEmail: "व्यवसाय ईमेल",
                password: "पासवर्ड",
                enterEmail: "आपला ईमेल प्रविष्ट करा",
                enterBusinessEmail: "आपला व्यवसाय ईमेल प्रविष्ट करा",
                enterPassword: "आपला पासवर्ड प्रविष्ट करा",
                loginSuccess: "लॉगिन यशस्वी! डॅशबोर्डवर पुनर्निर्देशित केले जात आहे...",
                farmerDashboard: "शेतकरी डॅशबोर्ड",
                welcomeDashboard: "आपल्या कृषी समुदाय हबमध्ये आपले स्वागत आहे",
                community: "समुदाय",
                weather: "हवामान",
                trendingCrops: "ट्रेंडिंग पिके",
                marketplace: "बाजार",
                shopkeeperDashboard: "दुकानदार डॅशबोर्ड",
                manageBusiness: "आपला कृषी व्यवसाय व्यवस्थापित करा आणि शेतकऱ्यांशी जोडा",
                overview: "आढावा",
                myProducts: "माझी उत्पादने",
                orders: "ऑर्डर",
                myProfile: "माझी प्रोफाइल",
                settings: "सेटिंग्ज",
                notifications: "सूचना",
                helpSupport: "मदत आणि समर्थन",
                logout: "लॉगआउट"
            }
        };

        // Current language
        let currentLang = localStorage.getItem('language') || 'en';

        // Language functions
        function toggleLanguageDropdown() {
            const dropdown = document.getElementById('languageDropdown');
            const btn = dropdown.previousElementSibling;
            dropdown.classList.toggle('active');
            
            // Rotate chevron
            const chevron = btn.querySelector('.fa-chevron-down');
            if (dropdown.classList.contains('active')) {
                chevron.style.transform = 'rotate(180deg)';
            } else {
                chevron.style.transform = 'rotate(0deg)';
            }
        }

        function changeLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('language', lang);
            updateLanguageUI();
            translatePage();
            closeLanguageDropdown();
        }

        function updateLanguageUI() {
            const langNames = {
                'en': 'English',
                'hi': 'हिंदी',
                'mr': 'मराठी'
            };
            document.getElementById('currentLanguage').textContent = langNames[currentLang];
            
            // Update checkmarks
            document.querySelectorAll('.language-option i.fa-check').forEach(check => {
                check.style.display = 'none';
            });
            document.getElementById('check-' + currentLang).style.display = 'inline-block';
        }

        function closeLanguageDropdown() {
            const dropdown = document.getElementById('languageDropdown');
            const btn = dropdown.previousElementSibling;
            dropdown.classList.remove('active');
            
            // Reset chevron
            const chevron = btn.querySelector('.fa-chevron-down');
            chevron.style.transform = 'rotate(0deg)';
        }

        function translatePage() {
            // Translate elements with data-translate attribute
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[currentLang] && translations[currentLang][key]) {
                    element.textContent = translations[currentLang][key];
                }
            });

            // Translate placeholders
            document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
                const key = element.getAttribute('data-translate-placeholder');
                if (translations[currentLang] && translations[currentLang][key]) {
                    element.placeholder = translations[currentLang][key];
                }
            });

            // Update HTML lang attribute
            document.documentElement.lang = currentLang;
        }

        // Close language dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const languageSelector = document.querySelector('.language-selector');
            const dropdown = document.getElementById('languageDropdown');
            
            if (languageSelector && !languageSelector.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Navigation functions
        function showPage(pageId) {
            console.log('Showing page:', pageId); // Debug log
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
            
            // Handle background switching
            if (pageId === 'farmerDashboard' || pageId === 'shopkeeperDashboard') {
                document.body.classList.add('dashboard-active');
            } else {
                document.body.classList.remove('dashboard-active');
            }
        }

        function showLoginPage() {
            console.log('Navigating to login page'); // Debug log
            document.body.classList.remove('dashboard-active');
            showPage('loginPage');
        }

        function showFarmerLogin() {
            console.log('Navigating to farmer login'); // Debug log
            document.body.classList.remove('dashboard-active');
            showPage('farmerLoginPage');
        }

        function showShopkeeperLogin() {
            console.log('Navigating to shopkeeper login'); // Debug log
            document.body.classList.remove('dashboard-active');
            showPage('shopkeeperLoginPage');
        }

        // Email validation function
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Password validation function
        function isValidPassword(password) {
            // Password should be at least 6 characters
            return password.length >= 6;
        }

        // Show error message in form
        function showLoginError(inputId, message) {
            const input = document.getElementById(inputId);
            if (input) {
                input.classList.add('error');
                input.style.borderColor = '#f44336';
                input.style.boxShadow = '0 0 0 3px rgba(244, 67, 54, 0.1)';
                
                // Remove existing error message
                const existingError = input.parentElement.querySelector('.error-message');
                if (existingError) {
                    existingError.remove();
                }
                
                // Add error message
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = message;
                input.parentElement.appendChild(errorDiv);
            }
        }

        // Clear error message
        function clearLoginError(inputId) {
            const input = document.getElementById(inputId);
            if (input) {
                input.classList.remove('error');
                input.style.borderColor = '#e1e5e9';
                input.style.boxShadow = 'none';
                const errorMsg = input.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        }

        // Clear all errors
        function clearAllLoginErrors() {
            clearLoginError('farmerEmail');
            clearLoginError('farmerPassword');
            clearLoginError('shopkeeperEmail');
            clearLoginError('shopkeeperPassword');
        }

        // Login functions
        function loginFarmer() {
            console.log('Farmer login clicked');
            const email = document.getElementById('farmerEmail').value.trim();
            const password = document.getElementById('farmerPassword').value;
            
            // Clear previous errors
            clearAllLoginErrors();
            
            let hasError = false;
            
            // Validate email
            if (!email) {
                showLoginError('farmerEmail', 'Email is required');
                hasError = true;
            } else if (!isValidEmail(email)) {
                showLoginError('farmerEmail', 'Please enter a valid email address');
                hasError = true;
            }
            
            // Validate password
            if (!password) {
                showLoginError('farmerPassword', 'Password is required');
                hasError = true;
            } else if (!isValidPassword(password)) {
                showLoginError('farmerPassword', 'Password must be at least 6 characters long');
                hasError = true;
            }
            
            if (hasError) {
                return;
            }
            
            // Simulate authentication (in a real app, this would check against a database)
            // For demo purposes, accept any valid email and password
            currentUser = {
                type: 'farmer',
                name: email.split('@')[0],
                email: email
            };
            
            console.log('Login successful');
            
            // Show success message
            const successMsg = document.getElementById('farmerLoginSuccess');
            successMsg.classList.add('show');
            
            // Redirect after 2 seconds
            setTimeout(() => {
                successMsg.classList.remove('show');
                updateHeader();
                showPage('farmerDashboard');
                document.getElementById('fab').classList.add('active');
                // Clear form
                document.getElementById('farmerEmail').value = '';
                document.getElementById('farmerPassword').value = '';
            }, 2000);
        }

        function loginShopkeeper() {
            console.log('Shopkeeper login clicked');
            const email = document.getElementById('shopkeeperEmail').value.trim();
            const password = document.getElementById('shopkeeperPassword').value;
            
            // Clear previous errors
            clearAllLoginErrors();
            
            let hasError = false;
            
            // Validate email
            if (!email) {
                showLoginError('shopkeeperEmail', 'Business email is required');
                hasError = true;
            } else if (!isValidEmail(email)) {
                showLoginError('shopkeeperEmail', 'Please enter a valid email address');
                hasError = true;
            }
            
            // Validate password
            if (!password) {
                showLoginError('shopkeeperPassword', 'Password is required');
                hasError = true;
            } else if (!isValidPassword(password)) {
                showLoginError('shopkeeperPassword', 'Password must be at least 6 characters long');
                hasError = true;
            }
            
            if (hasError) {
                return;
            }
            
            // Simulate authentication (in a real app, this would check against a database)
            // For demo purposes, accept any valid email and password
            currentUser = {
                type: 'shopkeeper',
                name: email.split('@')[0],
                email: email
            };
            
            console.log('Login successful');
            
            // Show success message
            const successMsg = document.getElementById('shopkeeperLoginSuccess');
            successMsg.classList.add('show');
            
            // Redirect after 2 seconds
            setTimeout(() => {
                successMsg.classList.remove('show');
                updateHeader();
                showPage('shopkeeperDashboard');
                document.getElementById('fab').classList.add('active');
                // Clear form
                document.getElementById('shopkeeperEmail').value = '';
                document.getElementById('shopkeeperPassword').value = '';
            }, 2000);
        }

        function updateHeader() {
            const userInfo = document.getElementById('userInfo');
            const userName = document.getElementById('userName');
            const userRole = document.getElementById('userRole');
            const userAvatar = document.getElementById('userAvatar');
            
            if (currentUser.type) {
                console.log('Updating header for user:', currentUser); // Debug log
                
                // Show user info
                userInfo.classList.add('active');
                userInfo.style.display = 'flex';
                
                // Update user details
                const displayName = currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1);
                userName.textContent = displayName;
                userRole.textContent = currentUser.type;
                userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
                
                // Set avatar color based on role
                if (currentUser.type === 'farmer') {
                    userAvatar.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
                } else {
                    userAvatar.style.background = 'linear-gradient(45deg, #2196F3, #1976D2)';
                }
            } else {
                userInfo.classList.remove('active');
                userInfo.style.display = 'none';
            }
        }

        function logout() {
            currentUser = { type: null, name: '', email: '' };
            const userInfo = document.getElementById('userInfo');
            userInfo.classList.remove('active');
            userInfo.style.display = 'none';
            document.getElementById('fab').classList.remove('active');
            document.body.classList.remove('dashboard-active');
            showLoginPage();
        }

        // Dashboard navigation
        function showFarmerSection(sectionId) {
            // Update nav items
            document.querySelectorAll('#farmerDashboard .nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Find and activate the clicked nav item
            const clickedItem = Array.from(document.querySelectorAll('#farmerDashboard .nav-item')).find(item => 
                item.getAttribute('onclick') && item.getAttribute('onclick').includes(sectionId)
            );
            if (clickedItem) {
                clickedItem.classList.add('active');
            }
            
            // Show content
            document.querySelectorAll('#farmerDashboard .dashboard-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            
            // Auto-fetch weather when weather section is shown
            if (sectionId === 'weather') {
                fetchWeather();
            }
        }

        function showShopkeeperSection(sectionId) {
            // Update nav items
            document.querySelectorAll('#shopkeeperDashboard .nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Find and activate the clicked nav item
            const clickedItem = Array.from(document.querySelectorAll('#shopkeeperDashboard .nav-item')).find(item => 
                item.getAttribute('onclick') && item.getAttribute('onclick').includes(sectionId)
            );
            if (clickedItem) {
                clickedItem.classList.add('active');
            }
            
            // Show content
            document.querySelectorAll('#shopkeeperDashboard .dashboard-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Handle community section ID mapping
            const targetId = sectionId === 'community' ? 'shopkeeper-community' : sectionId;
            document.getElementById(targetId).classList.add('active');
        }

        // Modal functions
        function showPostModal(type) {
            if (type) {
                document.getElementById('postType').value = type;
            }
            document.getElementById('postModal').style.display = 'block';
        }

        function showAddProductModal() {
            document.getElementById('addProductModal').style.display = 'block';
        }

        // Shopkeeper modal functions
        function showProductPostModal() {
            document.getElementById('productPostModal').style.display = 'block';
        }

        function showOfferModal() {
            document.getElementById('offerModal').style.display = 'block';
        }

        function showTipModal() {
            document.getElementById('tipModal').style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        // FAB functionality
        document.getElementById('fab').onclick = function() {
            if (currentUser.type === 'farmer') {
                showPostModal();
            } else if (currentUser.type === 'shopkeeper') {
                // Show a menu or default to product post
                showProductPostModal();
            }
        };

        // User dropdown functions
        function toggleUserDropdown() {
            const dropdown = document.getElementById('userDropdown');
            dropdown.classList.toggle('active');
        }

        function showProfile() {
            console.log('Show profile clicked');
            closeUserDropdown();
            // Add profile functionality here
            alert('Profile feature will be implemented soon!');
        }

        function showSettings() {
            console.log('Show settings clicked');
            closeUserDropdown();
            // Add settings functionality here
            alert('Settings feature will be implemented soon!');
        }

        function showNotifications() {
            console.log('Show notifications clicked');
            closeUserDropdown();
            // Add notifications functionality here
            alert('Notifications feature will be implemented soon!');
        }

        function showHelp() {
            console.log('Show help clicked');
            closeUserDropdown();
            // Add help functionality here
            alert('Help & Support feature will be implemented soon!');
        }

        function closeUserDropdown() {
            const dropdown = document.getElementById('userDropdown');
            dropdown.classList.remove('active');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const userInfo = document.getElementById('userInfo');
            const dropdown = document.getElementById('userDropdown');
            
            if (userInfo && !userInfo.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Utility functions
        function updateCropPrices(region) {
            // Simulate price updates based on region
            const prices = {
                'maharashtra': {
                    wheat: '₹2,150',
                    rice: '₹1,890',
                    sugarcane: '₹350',
                    cotton: '₹6,250',
                    tomato: '₹1,200',
                    onion: '₹950'
                },
                'punjab': {
                    wheat: '₹2,200',
                    rice: '₹1,920',
                    sugarcane: '₹380',
                    cotton: '₹6,100',
                    tomato: '₹1,150',
                    onion: '₹890'
                }
            };
            
            // Update prices in the UI (simplified)
            console.log('Prices updated for region:', region);
        }

        // Overview Section Functions
        function filterOverview(period) {
            // Update button styles
            document.querySelectorAll('#overview button[id^="filter-"]').forEach(btn => {
                btn.style.background = '#e0e0e0';
                btn.style.color = '#333';
            });
            document.getElementById('filter-' + period).style.background = '#4CAF50';
            document.getElementById('filter-' + period).style.color = 'white';
            
            // Update stats based on period (simulated)
            const stats = {
                today: { revenue: '₹1,250', orders: '5', products: '18', rating: '4.8★' },
                week: { revenue: '₹8,450', orders: '32', products: '18', rating: '4.8★' },
                month: { revenue: '₹24,850', orders: '127', products: '18', rating: '4.8★' }
            };
            
            const data = stats[period] || stats.month;
            document.getElementById('revenue-stat').textContent = data.revenue;
            document.getElementById('orders-stat').textContent = data.orders;
            document.getElementById('products-stat').textContent = data.products;
            document.getElementById('rating-stat').textContent = data.rating;
        }

        function viewAllProducts() {
            showShopkeeperSection('products');
        }

        // Product Management Functions
        function filterProducts() {
            const searchTerm = document.getElementById('productSearch').value.toLowerCase();
            const categoryFilter = document.getElementById('productCategoryFilter').value;
            const stockFilter = document.getElementById('productStockFilter').value;
            
            const products = document.querySelectorAll('#productsGrid .product-card');
            
            products.forEach(product => {
                const productName = product.getAttribute('data-product-name')?.toLowerCase() || '';
                const category = product.getAttribute('data-category') || '';
                const stock = product.getAttribute('data-stock') || '';
                
                const matchesSearch = !searchTerm || productName.includes(searchTerm);
                const matchesCategory = categoryFilter === 'all' || category === categoryFilter;
                const matchesStock = stockFilter === 'all' || stock === stockFilter;
                
                if (matchesSearch && matchesCategory && matchesStock) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }

        function viewProduct(productId) {
            alert(`Viewing product details for ${productId}. This feature will show full product information, sales history, and reviews.`);
        }

        function editProduct(productId) {
            alert(`Editing product ${productId}. This will open the product edit form.`);
            // In a real app, this would open the edit modal with pre-filled data
        }

        function deleteProduct(productId) {
            if (confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
                const product = document.querySelector(`[onclick*="${productId}"]`).closest('.product-card');
                if (product) {
                    product.style.animation = 'fadeOut 0.3s ease-out';
                    setTimeout(() => {
                        product.remove();
                        showSuccessMessage('Product deleted successfully!');
                    }, 300);
                }
            }
        }

        // Order Management Functions
        function filterOrders() {
            const searchTerm = document.getElementById('orderSearch').value.toLowerCase();
            const statusFilter = document.getElementById('orderStatusFilter').value;
            const dateFilter = document.getElementById('orderDateFilter').value;
            
            const rows = document.querySelectorAll('#ordersTable tbody tr');
            
            rows.forEach(row => {
                const orderId = row.querySelector('td:first-child')?.textContent.toLowerCase() || '';
                const customer = row.querySelector('td:nth-child(2)')?.textContent.toLowerCase() || '';
                const product = row.querySelector('td:nth-child(3)')?.textContent.toLowerCase() || '';
                const statusBadge = row.querySelector('.status-badge');
                const status = statusBadge ? statusBadge.className.includes('pending') ? 'pending' : 
                              statusBadge.className.includes('shipped') ? 'shipped' : 'delivered' : '';
                const date = row.querySelector('td:nth-child(7)')?.textContent || '';
                
                const matchesSearch = !searchTerm || orderId.includes(searchTerm) || customer.includes(searchTerm) || product.includes(searchTerm);
                const matchesStatus = statusFilter === 'all' || status === statusFilter;
                const matchesDate = !dateFilter || date.includes(dateFilter);
                
                if (matchesSearch && matchesStatus && matchesDate) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }

        function exportOrders() {
            alert('Exporting orders to CSV/Excel. This feature will download your order data.');
            // In a real app, this would generate and download a CSV/Excel file
        }

        function shipOrder(orderId) {
            if (confirm(`Mark order ${orderId} as shipped?`)) {
                const row = Array.from(document.querySelectorAll('#ordersTable tbody tr')).find(r => 
                    r.querySelector('td:first-child')?.textContent.includes(orderId)
                );
                if (row) {
                    const statusBadge = row.querySelector('.status-badge');
                    statusBadge.className = 'status-badge status-shipped';
                    statusBadge.textContent = 'Shipped';
                    
                    const actionCell = row.querySelector('td:last-child');
                    actionCell.innerHTML = `
                        <div style="display: flex; gap: 5px;">
                            <button class="btn" onclick="trackOrder('${orderId}')" style="background: #2196F3; color: white; padding: 8px 12px; font-size: 12px;">
                                <i class="fas fa-map-marker-alt"></i> Track
                            </button>
                            <button class="btn" onclick="viewOrderDetails('${orderId}')" style="background: #666; color: white; padding: 8px 12px; font-size: 12px;" title="View Details">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    `;
                    showSuccessMessage(`Order ${orderId} marked as shipped!`);
                }
            }
        }

        function trackOrder(orderId) {
            alert(`Tracking order ${orderId}.\n\nCurrent Status: Shipped\nEstimated Delivery: 2-3 business days\nTracking Number: TRK${orderId.slice(-3)}1234`);
        }

        function viewOrderDetails(orderId) {
            alert(`Order Details for ${orderId}:\n\nCustomer: [Customer Name]\nProduct: [Product Name]\nQuantity: [Qty]\nAmount: [Amount]\nStatus: [Status]\nDate: [Date]\n\nFull order details will be shown in a modal.`);
            // In a real app, this would open a detailed order modal
        }

        function submitPost() {
            // Get form values
            const postType = document.getElementById('postType').value;
            const description = document.getElementById('postDescription').value.trim();
            const location = document.getElementById('postLocation').value.trim();
            const mediaFile = document.getElementById('postMedia').files[0];
            
            // Validate description
            if (!description) {
                alert('Please enter a description for your post.');
                return;
            }
            
            // Get current user info
            const userName = currentUser.name ? currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1) : 'You';
            const userInitials = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U';
            const userLocation = location || 'Your Location';
            
            // Create new post element
            const newPost = document.createElement('div');
            newPost.className = 'feed-post';
            newPost.style.animation = 'fadeIn 0.5s ease-out';
            
            // Get post type emoji/icon
            const postTypeIcons = {
                'photo': '📷',
                'video': '🎥',
                'question': '❓',
                'update': '📝'
            };
            const postTypeIcon = postTypeIcons[postType] || '📝';
            
            // Build post content
            let postContent = `
                <div class="post-header">
                    <div class="post-avatar" style="background: linear-gradient(45deg, #4CAF50, #8BC34A);">${userInitials}</div>
                    <div>
                        <h4>${userName}</h4>
                        <p style="color: #666; font-size: 14px; margin: 0;">Just now • ${userLocation}</p>
                    </div>
                </div>
                <p>${postTypeIcon} ${description}</p>
            `;
            
            // Add media preview placeholder if file is selected
            const mediaId = 'post-media-' + Date.now();
            let mediaPlaceholder = '';
            if (mediaFile) {
                mediaPlaceholder = `<div class="post-media-container" data-media-id="${mediaId}" style="margin: 15px 0;"></div>`;
            }
            
            // Add post actions
            postContent += mediaPlaceholder + `
                <div class="post-actions">
                    <button class="action-btn" onclick="likePost(this)">
                        <i class="fas fa-thumbs-up"></i> Like (0)
                    </button>
                    <button class="action-btn" onclick="commentPost(this)">
                        <i class="fas fa-comment"></i> Comment (0)
                    </button>
                    <button class="action-btn" onclick="sharePost(this)">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            `;
            
            newPost.innerHTML = postContent;
            
            // Add media preview if file is selected
            if (mediaFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const mediaType = mediaFile.type.startsWith('image/') ? 'image' : 'video';
                    const mediaContainer = newPost.querySelector(`[data-media-id="${mediaId}"]`);
                    if (mediaContainer) {
                        if (mediaType === 'image') {
                            mediaContainer.innerHTML = `<img src="${e.target.result}" alt="Post media" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 12px;">`;
                        } else {
                            mediaContainer.innerHTML = `<video src="${e.target.result}" controls style="width: 100%; max-height: 400px; border-radius: 12px;"></video>`;
                        }
                    }
                };
                reader.readAsDataURL(mediaFile);
            }
            
            // Add post to the top of the feed
            const communityFeed = document.getElementById('communityFeed');
            if (communityFeed) {
                communityFeed.insertBefore(newPost, communityFeed.firstChild);
            }
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message show';
            successMessage.textContent = 'Post shared successfully!';
            
            const communityContainer = document.querySelector('.community-container');
            if (communityContainer) {
                communityContainer.insertBefore(successMessage, communityContainer.firstChild);
                
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
            
            // Clear form
            document.getElementById('postDescription').value = '';
            document.getElementById('postLocation').value = '';
            document.getElementById('postMedia').value = '';
            document.getElementById('postType').value = 'photo';
            
            // Close modal
            closeModal('postModal');
        }
        
        // Helper functions for post actions
        function likePost(button) {
            const text = button.innerHTML;
            const match = text.match(/Like \((\d+)\)/);
            if (match) {
                const count = parseInt(match[1]) + 1;
                button.innerHTML = `<i class="fas fa-thumbs-up"></i> Like (${count})`;
                button.style.color = '#4CAF50';
            }
        }
        
        function commentPost(button) {
            const text = button.innerHTML;
            const match = text.match(/Comment \((\d+)\)/);
            if (match) {
                const count = parseInt(match[1]) + 1;
                button.innerHTML = `<i class="fas fa-comment"></i> Comment (${count})`;
            }
        }
        
        function sharePost(button) {
            alert('Post shared!');
        }

        // Shopkeeper Post Functions
        function submitProductPost() {
            const productName = document.getElementById('productPostName').value.trim();
            const description = document.getElementById('productPostDescription').value.trim();
            const price = document.getElementById('productPostPrice').value.trim();
            const imageFile = document.getElementById('productPostImage').files[0];

            if (!productName || !description) {
                alert('Please fill in product name and description.');
                return;
            }

            const userName = currentUser.name ? currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1) : 'Shop Owner';
            const userInitials = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'S';

            const newPost = document.createElement('div');
            newPost.className = 'feed-post';
            newPost.style.animation = 'fadeIn 0.5s ease-out';

            let postContent = `
                <div class="post-header">
                    <div class="post-avatar" style="background: linear-gradient(45deg, #2196F3, #1976D2);">${userInitials}</div>
                    <div>
                        <h4>${userName}</h4>
                        <p style="color: #666; font-size: 14px; margin: 0;">Just now • Verified Seller</p>
                    </div>
                </div>
                <p><strong>📦 Product Promotion:</strong> ${productName}</p>
                <p>${description}</p>
            `;

            if (price) {
                postContent += `<p style="color: #4CAF50; font-weight: bold; margin: 10px 0;">Price: ${price}</p>`;
            }

            const mediaId = 'product-media-' + Date.now();
            if (imageFile) {
                postContent += `<div class="post-media-container" data-media-id="${mediaId}" style="margin: 15px 0;"></div>`;
            }

            postContent += `
                <div class="post-actions">
                    <button class="action-btn" onclick="likePost(this)">
                        <i class="fas fa-thumbs-up"></i> Like (0)
                    </button>
                    <button class="action-btn" onclick="commentPost(this)">
                        <i class="fas fa-comment"></i> Comment (0)
                    </button>
                    <button class="action-btn" onclick="sharePost(this)">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            `;

            newPost.innerHTML = postContent;

            if (imageFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const mediaContainer = newPost.querySelector(`[data-media-id="${mediaId}"]`);
                    if (mediaContainer) {
                        mediaContainer.innerHTML = `<img src="${e.target.result}" alt="Product image" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 12px;">`;
                    }
                };
                reader.readAsDataURL(imageFile);
            }

            const shopkeeperFeed = document.getElementById('shopkeeperFeed');
            if (shopkeeperFeed) {
                shopkeeperFeed.insertBefore(newPost, shopkeeperFeed.firstChild);
            }

            // Clear form
            document.getElementById('productPostName').value = '';
            document.getElementById('productPostDescription').value = '';
            document.getElementById('productPostPrice').value = '';
            document.getElementById('productPostImage').value = '';

            closeModal('productPostModal');
            showSuccessMessage('Product post shared successfully!');
        }

        function submitOfferPost() {
            const offerTitle = document.getElementById('offerTitle').value.trim();
            const description = document.getElementById('offerDescription').value.trim();
            const offerCode = document.getElementById('offerCode').value.trim();
            const validTill = document.getElementById('offerValidTill').value;
            const message = document.getElementById('offerMessage').value.trim();

            if (!offerTitle || !description) {
                alert('Please fill in offer title and description.');
                return;
            }

            const userName = currentUser.name ? currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1) : 'Shop Owner';
            const userInitials = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'S';

            const newPost = document.createElement('div');
            newPost.className = 'feed-post';
            newPost.style.animation = 'fadeIn 0.5s ease-out';

            let postContent = `
                <div class="post-header">
                    <div class="post-avatar" style="background: linear-gradient(45deg, #FF9800, #F57C00);">${userInitials}</div>
                    <div>
                        <h4>${userName}</h4>
                        <p style="color: #666; font-size: 14px; margin: 0;">Just now • Verified Seller</p>
                    </div>
                </div>
                <p><strong>🎯 Special Offer Alert!</strong> ${offerTitle}</p>
                <p>${description}</p>
            `;

            if (offerCode || validTill || message) {
                postContent += `<div style="background: #e8f5e8; padding: 15px; border-radius: 10px; margin: 15px 0;">`;
                if (offerCode) {
                    postContent += `<p style="margin: 0; font-weight: bold; color: #2d5a27;">Offer Code: ${offerCode}</p>`;
                }
                if (validTill) {
                    const date = new Date(validTill);
                    postContent += `<p style="margin: ${offerCode ? '5px' : '0'} 0 0 0; color: #666;">Valid till: ${date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>`;
                }
                if (message) {
                    postContent += `<p style="margin: 5px 0 0 0; color: #666;">${message}</p>`;
                }
                postContent += `</div>`;
            }

            postContent += `
                <div class="post-actions">
                    <button class="action-btn" onclick="likePost(this)">
                        <i class="fas fa-thumbs-up"></i> Like (0)
                    </button>
                    <button class="action-btn" onclick="commentPost(this)">
                        <i class="fas fa-comment"></i> Comment (0)
                    </button>
                    <button class="action-btn" onclick="sharePost(this)">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            `;

            newPost.innerHTML = postContent;

            const shopkeeperFeed = document.getElementById('shopkeeperFeed');
            if (shopkeeperFeed) {
                shopkeeperFeed.insertBefore(newPost, shopkeeperFeed.firstChild);
            }

            // Clear form
            document.getElementById('offerTitle').value = '';
            document.getElementById('offerDescription').value = '';
            document.getElementById('offerCode').value = '';
            document.getElementById('offerValidTill').value = '';
            document.getElementById('offerMessage').value = '';

            closeModal('offerModal');
            showSuccessMessage('Offer created and shared successfully!');
        }

        function submitTipPost() {
            const tipTitle = document.getElementById('tipTitle').value.trim();
            const tipContent = document.getElementById('tipContent').value.trim();
            const category = document.getElementById('tipCategory').value;

            if (!tipTitle || !tipContent) {
                alert('Please fill in tip title and content.');
                return;
            }

            const userName = currentUser.name ? currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1) : 'Shop Owner';
            const userInitials = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'S';

            const categoryLabels = {
                'general': 'General Farming',
                'crops': 'Crop Management',
                'pest': 'Pest Control',
                'irrigation': 'Irrigation',
                'fertilizer': 'Fertilizer Usage',
                'harvest': 'Harvesting'
            };

            const newPost = document.createElement('div');
            newPost.className = 'feed-post';
            newPost.style.animation = 'fadeIn 0.5s ease-out';

            const postContent = `
                <div class="post-header">
                    <div class="post-avatar" style="background: linear-gradient(45deg, #4CAF50, #45a049);">${userInitials}</div>
                    <div>
                        <h4>${userName}</h4>
                        <p style="color: #666; font-size: 14px; margin: 0;">Just now • Verified Seller</p>
                    </div>
                </div>
                <p><strong>💡 Farming Tip - ${categoryLabels[category]}:</strong> ${tipTitle}</p>
                <p>${tipContent}</p>
                <div class="post-actions">
                    <button class="action-btn" onclick="likePost(this)">
                        <i class="fas fa-thumbs-up"></i> Like (0)
                    </button>
                    <button class="action-btn" onclick="commentPost(this)">
                        <i class="fas fa-comment"></i> Comment (0)
                    </button>
                    <button class="action-btn" onclick="sharePost(this)">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            `;

            newPost.innerHTML = postContent;

            const shopkeeperFeed = document.getElementById('shopkeeperFeed');
            if (shopkeeperFeed) {
                shopkeeperFeed.insertBefore(newPost, shopkeeperFeed.firstChild);
            }

            // Clear form
            document.getElementById('tipTitle').value = '';
            document.getElementById('tipContent').value = '';
            document.getElementById('tipCategory').value = 'general';

            closeModal('tipModal');
            showSuccessMessage('Farming tip shared successfully!');
        }

        function showSuccessMessage(message) {
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message show';
            successMessage.textContent = message;

            const communityContainer = document.querySelector('.community-container');
            if (communityContainer) {
                communityContainer.insertBefore(successMessage, communityContainer.firstChild);
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        }

        // Weather API Configuration
        // NOTE: Get your free API key from https://openweathermap.org/api
        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        const WEATHER_API_KEY = '46b9355519cd039736bcbdcd34572f9b'; // OpenWeatherMap API key
        const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
        const WEATHER_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';
        let currentWeatherCity = 'Pune'; // Default city

        // Weather icon mapping
        const weatherIcons = {
            '01d': 'fa-sun',           // clear sky day
            '01n': 'fa-moon',          // clear sky night
            '02d': 'fa-cloud-sun',     // few clouds day
            '02n': 'fa-cloud-moon',    // few clouds night
            '03d': 'fa-cloud',          // scattered clouds
            '03n': 'fa-cloud',
            '04d': 'fa-cloud',         // broken clouds
            '04n': 'fa-cloud',
            '09d': 'fa-cloud-rain',    // shower rain
            '09n': 'fa-cloud-rain',
            '10d': 'fa-cloud-sun-rain', // rain day
            '10n': 'fa-cloud-moon-rain', // rain night
            '11d': 'fa-bolt',          // thunderstorm
            '11n': 'fa-bolt',
            '13d': 'fa-snowflake',     // snow
            '13n': 'fa-snowflake',
            '50d': 'fa-smog',          // mist
            '50n': 'fa-smog'
        };

        // Fetch weather data
        async function fetchWeather(city = null) {
            const cityName = city || currentWeatherCity;
            const loadingEl = document.getElementById('weatherLoading');
            const contentEl = document.getElementById('weatherContent');
            const errorEl = document.getElementById('weatherError');
            
            // Show loading
            if (loadingEl) loadingEl.style.display = 'block';
            if (contentEl) contentEl.style.display = 'none';
            if (errorEl) errorEl.style.display = 'none';

            // Check if API key is set
            if (WEATHER_API_KEY === 'YOUR_API_KEY') {
                showWeatherError('Please set your OpenWeatherMap API key in script.js. Get a free key at https://openweathermap.org/api');
                return;
            }

            try {
                // Fetch current weather
                const response = await fetch(`${WEATHER_API_URL}?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`);
                
                if (!response.ok) {
                    throw new Error(`Weather API error: ${response.status}`);
                }

                const data = await response.json();
                updateWeatherDisplay(data);
                currentWeatherCity = cityName;

                // Fetch forecast
                fetchWeatherForecast(cityName);
            } catch (error) {
                console.error('Weather fetch error:', error);
                showWeatherError(`Unable to fetch weather data: ${error.message}. Please check your API key or try a different city.`);
            } finally {
                if (loadingEl) loadingEl.style.display = 'none';
                if (contentEl) contentEl.style.display = 'block';
            }
        }

        // Update weather display
        function updateWeatherDisplay(data) {
            // Update location
            const locationEl = document.getElementById('weatherLocation');
            if (locationEl) {
                locationEl.textContent = `${data.name}, ${data.sys.country}`;
            }

            // Update temperature
            const tempEl = document.getElementById('weatherTemp');
            if (tempEl) {
                tempEl.textContent = `${Math.round(data.main.temp)}°C`;
            }

            // Update description and icon
            const descEl = document.getElementById('weatherDescription');
            const iconEl = document.getElementById('weatherIcon');
            if (descEl) {
                descEl.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            }
            if (iconEl) {
                const iconCode = data.weather[0].icon;
                const iconClass = weatherIcons[iconCode] || 'fa-sun';
                iconEl.className = `fas ${iconClass}`;
            }

            // Update details
            const visibilityEl = document.getElementById('weatherVisibility');
            if (visibilityEl) {
                visibilityEl.textContent = data.visibility ? `${(data.visibility / 1000).toFixed(1)} km` : 'N/A';
            }

            const humidityEl = document.getElementById('weatherHumidity');
            if (humidityEl) {
                humidityEl.textContent = `${data.main.humidity}%`;
            }

            const windEl = document.getElementById('weatherWind');
            if (windEl) {
                windEl.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`; // Convert m/s to km/h
            }

            const feelsLikeEl = document.getElementById('weatherFeelsLike');
            if (feelsLikeEl) {
                feelsLikeEl.textContent = `${Math.round(data.main.feels_like)}°C`;
            }
        }

        // Fetch weather forecast
        async function fetchWeatherForecast(city) {
            try {
                const response = await fetch(`${WEATHER_FORECAST_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
                if (!response.ok) return;

                const data = await response.json();
                updateForecastDisplay(data);
            } catch (error) {
                console.error('Forecast fetch error:', error);
            }
        }

        // Update forecast display
        function updateForecastDisplay(data) {
            const forecastEl = document.getElementById('weatherForecast');
            if (!forecastEl) return;

            // Get daily forecasts (one per day)
            const dailyForecasts = [];
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            
            // Group forecasts by day
            const forecastsByDay = {};
            data.list.forEach(item => {
                const date = new Date(item.dt * 1000);
                const dayKey = date.toDateString();
                if (!forecastsByDay[dayKey] || date.getHours() === 12) {
                    forecastsByDay[dayKey] = item;
                }
            });

            // Get next 7 days
            const today = new Date();
            let forecastHTML = '';
            
            for (let i = 0; i < 7; i++) {
                const date = new Date(today);
                date.setDate(today.getDate() + i);
                const dayKey = date.toDateString();
                const forecast = forecastsByDay[dayKey];
                
                if (forecast) {
                    const dayName = days[date.getDay()];
                    const iconCode = forecast.weather[0].icon;
                    const iconClass = weatherIcons[iconCode] || 'fa-sun';
                    const temp = Math.round(forecast.main.temp);
                    
                    forecastHTML += `
                        <div>
                            <p style="margin: 0; font-size: 12px;">${dayName}</p>
                            <i class="fas ${iconClass}"></i>
                            <p style="margin: 5px 0 0 0; font-size: 14px;"><strong>${temp}°</strong></p>
                        </div>
                    `;
                } else {
                    const dayName = days[date.getDay()];
                    forecastHTML += `
                        <div>
                            <p style="margin: 0; font-size: 12px;">${dayName}</p>
                            <i class="fas fa-sun"></i>
                            <p style="margin: 5px 0 0 0; font-size: 14px;"><strong>--</strong></p>
                        </div>
                    `;
                }
            }
            
            forecastEl.innerHTML = forecastHTML;
        }

        // Show weather error
        function showWeatherError(message) {
            const errorEl = document.getElementById('weatherError');
            const errorMsgEl = document.getElementById('weatherErrorMessage');
            if (errorEl) errorEl.style.display = 'block';
            if (errorMsgEl) errorMsgEl.textContent = message;
        }

        // Search weather by city
        function searchWeather() {
            const cityInput = document.getElementById('weatherCityInput');
            if (cityInput && cityInput.value.trim()) {
                fetchWeather(cityInput.value.trim());
            } else {
                alert('Please enter a city name');
            }
        }

        // Get weather for current location
        function getCurrentLocationWeather() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        
                        if (WEATHER_API_KEY === 'YOUR_API_KEY') {
                            showWeatherError('Please set your OpenWeatherMap API key in script.js');
                            return;
                        }

                        try {
                            const loadingEl = document.getElementById('weatherLoading');
                            const contentEl = document.getElementById('weatherContent');
                            const errorEl = document.getElementById('weatherError');
                            
                            if (loadingEl) loadingEl.style.display = 'block';
                            if (contentEl) contentEl.style.display = 'none';
                            if (errorEl) errorEl.style.display = 'none';

                            const response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
                            if (!response.ok) throw new Error('Location weather fetch failed');

                            const data = await response.json();
                            updateWeatherDisplay(data);
                            currentWeatherCity = data.name;
                            fetchWeatherForecast(data.name);

                            if (loadingEl) loadingEl.style.display = 'none';
                            if (contentEl) contentEl.style.display = 'block';
                        } catch (error) {
                            showWeatherError('Unable to fetch weather for your location');
                        }
                    },
                    (error) => {
                        alert('Unable to get your location. Please allow location access or search for a city manually.');
                    }
                );
            } else {
                alert('Geolocation is not supported by your browser');
            }
        }

        function addProduct() {
            // Simulate product addition
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message show';
            successMessage.textContent = 'Product added successfully!';
            
            document.querySelector('#products .trending-section').insertBefore(
                successMessage,
                document.querySelector('#products .product-grid')
            );
            
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
            
            closeModal('addProductModal');
        }

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            // Any initialization code
            console.log('AgriConnect initialized');
            // Initialize language
            updateLanguageUI();
            translatePage();
            // Show checkmark for current language
            document.getElementById('check-' + currentLang).style.display = 'inline-block';
        });