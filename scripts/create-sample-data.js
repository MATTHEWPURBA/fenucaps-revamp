// scripts/create-sample-data.js
// Run with: node scripts/create-sample-data.js

const contentful = require('contentful-management');
require('dotenv').config({ path: '.env.local' });

async function createSampleData() {
  if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN) {
    console.error('❌ CONTENTFUL_MANAGEMENT_TOKEN is required in .env.local');
    process.exit(1);
  }

  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
    console.error('❌ NEXT_PUBLIC_CONTENTFUL_SPACE_ID is required in .env.local');
    process.exit(1);
  }

  try {
    // Initialize the management client
    const client = contentful.createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    });

    console.log('🔗 Connecting to Contentful...');
    const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment('master');

    console.log('✅ Connected to space:', space.name);

    // Create sample products
    const sampleProducts = [
      {
        id: 'fenucaps-original',
        fields: {
          name: { 'en-US': 'Fenucaps ASI Booster Original' },
          slug: { 'en-US': 'fenucaps-asi-booster-original' },
          description: { 
            'en-US': 'Suplemen ASI booster dengan kandungan fenugreek, jahe, dan kunyit yang terbukti secara klinis meningkatkan produksi ASI hingga 103%. Formula terpercaya untuk ibu menyusui.' 
          },
          price: { 'en-US': 250000 },
          salePrice: { 'en-US': 199000 },
          category: { 'en-US': 'ASI Booster' },
          inStock: { 'en-US': true },
          stockQuantity: { 'en-US': 100 },
          benefits: { 
            'en-US': [
              'Meningkatkan produksi ASI hingga 103%',
              'Tanpa efek samping pada ibu dan bayi',
              'Membantu pemulihan pasca persalinan',
              'Meningkatkan kualitas ASI'
            ] 
          },
          ingredients: { 
            'en-US': [
              'Fenugreek Extract 200mg',
              'Ginger Extract 120mg', 
              'Turmeric Extract 100mg',
              'Vitamin B Complex',
              'Folic Acid'
            ] 
          },
          usage: { 
            'en-US': 'Konsumsi 2 kapsul 3 kali sehari sebelum makan. Minum dengan air putih yang cukup. Konsultasikan dengan dokter jika diperlukan.' 
          },
          warnings: { 
            'en-US': 'Tidak dianjurkan untuk ibu hamil. Hentikan penggunaan jika terjadi reaksi alergi.' 
          },
          certification: { 'en-US': ['BPOM', 'Halal', 'SGS'] }
        }
      },
      {
        id: 'fenucaps-premium',
        fields: {
          name: { 'en-US': 'Fenucaps ASI Booster Premium' },
          slug: { 'en-US': 'fenucaps-asi-booster-premium' },
          description: { 
            'en-US': 'Formula premium dengan konsentrasi tinggi untuk hasil maksimal dalam meningkatkan produksi ASI. Cocok untuk ibu yang membutuhkan peningkatan ASI lebih cepat.' 
          },
          price: { 'en-US': 350000 },
          category: { 'en-US': 'ASI Booster' },
          inStock: { 'en-US': true },
          stockQuantity: { 'en-US': 50 },
          benefits: { 
            'en-US': [
              'Formula konsentrasi tinggi',
              'Hasil lebih cepat dalam 24-48 jam',
              'Mengandung ekstrak premium',
              'Kemasan praktis travel friendly'
            ] 
          },
          ingredients: { 
            'en-US': [
              'Fenugreek Extract 300mg',
              'Ginger Extract 150mg',
              'Turmeric Extract 120mg',
              'Royal Jelly',
              'Omega-3 DHA'
            ] 
          },
          usage: { 
            'en-US': 'Konsumsi 1 kapsul 3 kali sehari setelah makan. Dapat dikombinasikan dengan Fenucaps Original untuk hasil optimal.' 
          },
          certification: { 'en-US': ['BPOM', 'Halal', 'FDA', 'SGS'] }
        }
      },
      {
        id: 'fenucaps-herbal-tea',
        fields: {
          name: { 'en-US': 'Fenucaps Herbal Tea ASI Booster' },
          slug: { 'en-US': 'fenucaps-herbal-tea-asi-booster' },
          description: { 
            'en-US': 'Teh herbal alami dengan campuran rempah-rempah pilihan untuk mendukung produksi ASI. Nikmat diminum dan mudah disiapkan.' 
          },
          price: { 'en-US': 150000 },
          salePrice: { 'en-US': 125000 },
          category: { 'en-US': 'Herbal Tea' },
          inStock: { 'en-US': true },
          stockQuantity: { 'en-US': 75 },
          benefits: { 
            'en-US': [
              'Rasa yang nikmat dan menyegarkan',
              'Mudah disiapkan kapan saja',
              'Mengandung antioksidan alami',
              'Membantu relaksasi ibu menyusui'
            ] 
          },
          ingredients: { 
            'en-US': [
              'Fenugreek Leaves',
              'Ginger Root',
              'Turmeric Powder',
              'Fennel Seeds',
              'Blessed Thistle'
            ] 
          },
          usage: { 
            'en-US': 'Seduh 1 sachet dengan air panas 200ml. Diamkan 3-5 menit. Minum 2-3 kali sehari setelah makan.' 
          },
          certification: { 'en-US': ['BPOM', 'Halal'] }
        }
      }
    ];

    // Create sample reviews
    const sampleReviews = [
      {
        id: 'review-1',
        fields: {
          customerName: { 'en-US': 'Bunda Sarah' },
          rating: { 'en-US': 5 },
          comment: { 
            'en-US': 'Subhanallah, ASI saya meningkat drastis setelah minum Fenucaps. Dalam 3 hari sudah terasa bedanya. Sangat recommended untuk busui!' 
          },
          location: { 'en-US': 'Jakarta' },
          productId: { 'en-US': 'fenucaps-original' },
          verified: { 'en-US': true },
          date: { 'en-US': '2024-01-15T10:30:00Z' }
        }
      },
      {
        id: 'review-2',
        fields: {
          customerName: { 'en-US': 'Ibu Ani' },
          rating: { 'en-US': 5 },
          comment: { 
            'en-US': 'Produk terbaik untuk ASI booster. Tidak ada efek samping sama sekali, malah badan terasa lebih segar. Terima kasih Fenucaps!' 
          },
          location: { 'en-US': 'Surabaya' },
          productId: { 'en-US': 'fenucaps-original' },
          verified: { 'en-US': true },
          date: { 'en-US': '2024-01-10T14:20:00Z' }
        }
      },
      {
        id: 'review-3',
        fields: {
          customerName: { 'en-US': 'Mama Lisa' },
          rating: { 'en-US': 5 },
          comment: { 
            'en-US': 'Alhamdulillah ASI lancar berkat Fenucaps. Bayi saya jadi kenyang dan tidur nyenyak. Highly recommended!' 
          },
          location: { 'en-US': 'Bandung' },
          productId: { 'en-US': 'fenucaps-premium' },
          verified: { 'en-US': true },
          date: { 'en-US': '2024-01-08T16:45:00Z' }
        }
      }
    ];

    console.log('📝 Creating sample products...');

    // Create products
    for (const productData of sampleProducts) {
      try {
        const entry = await environment.createEntryWithId('product', productData.id, {
          fields: productData.fields
        });
        
        await entry.publish();
        console.log(`✅ Created product: ${productData.fields.name['en-US']}`);
      } catch (error) {
        if (error.name === 'VersionMismatch' || error.message.includes('already exists')) {
          console.log(`⚠️  Product already exists: ${productData.fields.name['en-US']}`);
        } else {
          console.error(`❌ Error creating product ${productData.fields.name['en-US']}:`, error.message);
        }
      }
    }

    console.log('💬 Creating sample reviews...');

    // Create reviews
    for (const reviewData of sampleReviews) {
      try {
        const entry = await environment.createEntryWithId('review', reviewData.id, {
          fields: reviewData.fields
        });
        
        await entry.publish();
        console.log(`✅ Created review from: ${reviewData.fields.customerName['en-US']}`);
      } catch (error) {
        if (error.name === 'VersionMismatch' || error.message.includes('already exists')) {
          console.log(`⚠️  Review already exists from: ${reviewData.fields.customerName['en-US']}`);
        } else {
          console.error(`❌ Error creating review from ${reviewData.fields.customerName['en-US']}:`, error.message);
        }
      }
    }

    console.log('🎉 Sample data creation completed!');
    console.log('📱 You can now test your website at http://localhost:3000/shop');

  } catch (error) {
    console.error('❌ Error creating sample data:', error);
    process.exit(1);
  }
}

// Run the script
createSampleData(); 