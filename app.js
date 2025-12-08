// characters is loaded at runtime from `characters.json` when available.
// This allows using asset metadata while serving placeholder avatars instead of the exact photos.
let characters = [];

// Fallback built-in characters (used if characters.json is missing)
const fallbackCharacters = [
  {
    id: 'hello_kitty',
    name: 'Hello Kitty (placeholder)',
    source: 'sanrio images/hello kitty.png',
    image: 'sanrio images/hello kitty.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'A cheerful icon from a charming town; known for friendliness and a love of baking and friendship.',
    personality: 'Kind, polite, and endlessly friendly. She loves making new friends and helping others.',
    activities: 'Baking, letter-writing, visiting friends, and collecting cute trinkets.',
    likes: 'Apple pie, ribbons, and cozy tea parties.',
    dislikes: 'Loneliness and cold porridge.',
    friends: 'A big circle of adorable pals in the neighborhood.',
    fun: ['Often carries a tiny accessory in her bag.', 'Has a favorite cafe where she practices baking.']
  },
  {
    id: 'cheery-chums',
    name: 'Cheery Chums',
    source: 'sanrio images/cheery chums.jpeg',
    image: 'sanrio images/cheery chums.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Cheery Chums are a group of cheerful characters who love spreading happiness and fun to everyone around them.',
    personality: 'Upbeat, friendly, and always ready to celebrate life with enthusiasm and laughter.',
    activities: 'Throwing parties, making friends, having adventures, and spreading joy wherever they go.',
    likes: 'Celebrations, laughter, friendship, bright colors, and fun times together.',
    dislikes: 'Sadness and negativity.',
    friends: 'A group of happy, fun-loving companions who enjoy celebrating life together.',
    fun: ['Together they create happiness wherever they go.', 'Always find reasons to celebrate and have fun.']
  },
  {
    id: 'my_melody',
    name: 'My Melody',
    source: 'sanrio images/my melody.jpeg',
    image: 'sanrio images/my melody.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'My Melody is a gentle rabbit from a cozy countryside village, known for her kind heart and thoughtful gifts. She loves slow, comforting days spent crafting and baking with close friends.',
    personality: 'Warm, polite, and considerate — My Melody is shy but deeply loyal. She comforts friends with small gestures and always listens with care.',
    activities: 'Sewing tiny gifts, baking almond cookies, writing letters, and hosting quiet tea parties for friends.',
    likes: 'Almond tarts, her signature pink hood, handmade presents, and handwritten notes.',
    dislikes: 'Loud arguments, messiness, and being rushed.',
    friends: 'Kiko, Mimi, and a circle of close countryside friends who share crafts and tea.',
    fun: ['She embroiderers a tiny motif into every gift she gives.', 'Loves collecting ribbon scraps and turning them into new bows.']
  },
  {
    id: 'kuromi',
    name: 'Kuromi',
    source: 'sanrio images/kuromi.png',
    image: 'sanrio images/kuromi.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Kuromi is a mischievous, punk‑style character from a lively neighborhood, known for a playful rebellious streak.',
    personality: 'Feisty, bold, and a little dramatic — she can be sassy but cares deeply for close friends.',
    activities: 'Skating around town, writing cheeky notes, and planning small playful pranks.',
    likes: 'Skateboards, edgy accessories, and upbeat music.',
    dislikes: 'Boredom and being told what to do.',
    friends: 'A tight-knit group of quirky pals and fellow performers.',
    fun: ['Collects unique pins and badges from local shops.', 'Once organized a midnight rooftop mini-concert for friends.']
  },
  {
    id: 'cinnamoroll',
    name: 'Cinnamoroll',
    source: 'sanrio images/cinnamoroll.png',
    image: 'sanrio images/cinnamoroll.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'A gentle pup with long ears who arrived from a quiet town; known for flying by flapping his ears.',
    personality: 'Soft-spoken, friendly, and imaginative — loves meeting new friends and smelling the morning breeze.',
    activities: 'Baking, flying short distances with his ears, and running a cozy coffee shop.',
    likes: 'Warm milk, fluffy cushions, and cloud-shaped treats.',
    dislikes: 'Crowded places and spilled coffee.',
    friends: 'Frequent customers and neighborhood pals.',
    fun: ['Often helps deliver sweet treats across town.', 'Has a favorite blue ribbon he never loses.']
  },
  {
    id: 'pompompurin',
    name: 'Pompompurin',
    source: 'sanrio images/pompompurin.jpeg',
    image: 'sanrio images/pompompurin.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'A golden retriever-like character who loves napping in the sun and collecting cozy scarves.',
    personality: 'Easygoing, friendly, and a lover of naps. He’s always ready to share a snack.',
    activities: 'Napping, eating pudding-inspired treats, and meeting fans at the park.',
    likes: 'Milk pudding, soft berets, and afternoon naps.',
    dislikes: 'Loud alarms and empty snack bowls.',
    friends: 'Local cafe regulars and small animal pals.',
    fun: ['Has a beret he considers his lucky charm.', 'Once held a picnic where everyone brought pudding.']
  },
  {
    id: 'keroppi',
    name: 'Keroppi',
    source: 'sanrio images/keroppi.jpeg',
    image: 'sanrio images/keroppi.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'A lively frog from Donut Pond who loves sports and friendly competition.',
    personality: 'Energetic, optimistic, and sociable. Keroppi loves cheering on friends.',
    activities: 'Playing soccer, exploring the pond, and organizing neighborhood races.',
    likes: 'Pond adventures, family time, and fast swims.',
    dislikes: 'Stormy weather and missing practice.',
    friends: 'Pond pals and sports teams.',
    fun: ['Keeps a small collection of race ribbons.', 'Can whistle tunes that get frogs hopping.']
  },
  {
    id: 'chococat',
    name: 'Chococat',
    source: 'sanrio images/chococat.jpeg',
    image: 'sanrio images/chococat.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'A curious cat who loves gadgets and often acts as the clever problem-solver of the group.',
    personality: 'Curious, clever, and observant. He enjoys tinkering and helping friends solve puzzles.',
    activities: 'Reading, collecting interesting gadgets, and helping neighbors with small fixes.',
    likes: 'Techy toys, newspapers, and clever riddles.',
    dislikes: 'Confusion and broken gadgets.',
    friends: 'Inventors and bookish pals.',
    fun: ['Always has a handy tool in his pocket.', 'Can identify the sound of a distant bell.']
  },
  {
    id: 'pochacco',
    name: 'Pochacco',
    source: 'sanrio images/pochacco.png',
    image: 'sanrio images/pochacco.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Pochacco is a spirited, sporty puppy from a lively neighborhood. He grew up loving games, drawing, and meeting new people at local matches and events.',
    personality: 'Energetic, friendly, and optimistic — Pochacco is endlessly curious and often the first to invite others to play.',
    activities: 'Playing soccer and other sports, sketching cartoons of his adventures, and organizing friendly races with pals.',
    likes: 'Soccer, banana-flavored treats, sketching, and collecting caps.',
    dislikes: 'Rude behavior and canceled games due to rain.',
    friends: 'Neighborhood sports teams and a bunch of creative, playful pals.',
    fun: ['Keeps a small sketchbook where he draws memorable matches and friends.', 'Has a lucky cap he wears for important games.']
  },
  {
    id: 'kiki_lala',
    name: 'Little Twin Stars',
    source: 'sanrio images/my little twin stars.png',
    image: 'sanrio images/my little twin stars.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Kiki and Lala are twin star siblings who travel the skies sharing kindness and gentle magic.',
    personality: 'Kiki is curious and adventurous; Lala is calm and nurturing — together they balance each other.',
    activities: 'Stargazing, drawing constellations, and sprinkling tiny stardust to cheer people up.',
    likes: 'Star sweets, lullabies, and bedtime stories.',
    dislikes: 'Lonely nights and heavy clouds.',
    friends: 'Dreamy creatures and night-time neighbors.',
    fun: ['They carry a small star-paint set to decorate sleepy skies.', 'They once led a lantern night to help a village find its way.']
  },
  {
    id: 'my-sweet-piano',
    name: 'My Sweet Piano',
    source: 'sanrio images/my sweet piano.jpeg',
    image: 'sanrio images/my sweet piano.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'My Sweet Piano is a sweet sheep who loves music and making friends smile.',
    personality: 'Gentle, kind, and musical — always ready to share a song.',
    activities: 'Playing piano, composing melodies, and spreading joy through music.',
    likes: 'Music, flowers, and sweet treats.',
    dislikes: 'Loud noises and sad songs.',
    friends: 'Musicians and music lovers.',
    fun: ['Can play any song by ear.', 'Loves to perform at small concerts for friends.']
  },
  {
    id: 'poron',
    name: 'Poron',
    source: 'sanrio images/poron.jpeg',
    image: 'sanrio images/poron.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Poron is an adorable character who loves adventures and making new friends.',
    personality: 'Cheerful, playful, and full of energy.',
    activities: 'Exploring, playing games, and collecting treasures.',
    likes: 'Adventures, colorful things, and snacks.',
    dislikes: 'Boredom and rainy days.',
    friends: 'Adventurous pals and playful companions.',
    fun: ['Always carries a lucky charm.', 'Loves discovering hidden spots in the neighborhood.']
  },
  {
    id: 'mocha',
    name: 'Mocha',
    source: 'sanrio images/mocha.jpeg',
    image: 'sanrio images/mocha.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Mocha is a sweet and gentle character who enjoys cozy moments and good company.',
    personality: 'Calm, friendly, and warm-hearted.',
    activities: 'Reading, relaxing with friends, and enjoying warm drinks.',
    likes: 'Coffee, books, and peaceful afternoons.',
    dislikes: 'Rush and chaos.',
    friends: 'Quiet and thoughtful companions.',
    fun: ['Has a favorite reading spot by the window.', 'Enjoys making special coffee blends for friends.']
  },
  {
    id: 'dear-daniel',
    name: 'Dear Daniel',
    source: 'sanrio images/dear daniel.png',
    image: 'sanrio images/dear daniel.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Dear Daniel is a gentle and kind rabbit who values friendship and kindness.',
    personality: 'Thoughtful, caring, and always considerate of others.',
    activities: 'Writing letters, gardening, and spending time with loved ones.',
    likes: 'Fresh flowers, handwritten notes, and quiet moments.',
    dislikes: 'Rudeness and conflict.',
    friends: 'Tender-hearted companions and caring souls.',
    fun: ['Writes beautiful letters to friends.', 'Has a special garden where he grows flowers.']
  },
  {
    id: 'lloromannic',
    name: 'Lloromannic',
    source: 'sanrio images/lloromannic.jpeg',
    image: 'sanrio images/lloromannic.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Lloromannic is a gentle and thoughtful character who spreads kindness wherever she goes.',
    personality: 'Sweet, compassionate, and deeply caring about others.',
    activities: 'Spreading joy, making friends smile, and sharing thoughtful moments.',
    likes: 'Kind gestures, flowers, meaningful conversations, and helping others.',
    dislikes: 'Rudeness and negativity.',
    friends: 'Warm-hearted and sincere companions.',
    fun: ['Always carries tokens of friendship.', 'Loves sharing heartfelt stories with others.']
  },
  {
    id: 'charmmy-kitty',
    name: 'Charmmy Kitty',
    source: 'sanrio images/charmmy kitty.jpeg',
    image: 'sanrio images/charmmy kitty.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Charmmy Kitty is a fashionable and elegant cat who loves all things cute and stylish.',
    personality: 'Glamorous, charming, and absolutely adorable.',
    activities: 'Fashion design, accessorizing, and looking fabulous.',
    likes: 'Pretty things, sparkles, pink items, and shopping.',
    dislikes: 'Anything plain or boring.',
    friends: 'Hello Kitty and other fashionable companions.',
    fun: ['Loves wearing different accessories every day.', 'Has an impeccable sense of style.']
  },
  {
    id: 'baku',
    name: 'Baku',
    source: 'sanrio images/baku.png',
    image: 'sanrio images/baku.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Baku is a cute and whimsical character inspired by the mythical tapir creature from Japanese folklore.',
    personality: 'Playful, dreamy, and full of imagination.',
    activities: 'Collecting dreams, playing with friends, and having adventures.',
    likes: 'Fantasy, imagination, sleeping, and magical things.',
    dislikes: 'Nightmares and sadness.',
    friends: 'Other imaginative and playful characters.',
    fun: ['Eats bad dreams and turns them into good ones.', 'Loves to dream and daydream throughout the day.']
  },
  {
    id: 'chiffon',
    name: 'Chiffon',
    source: 'sanrio images/chiffon.jpeg',
    image: 'sanrio images/chiffon.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Chiffon is a delicate and sweet character who loves fluffy things and pastries.',
    personality: 'Gentle, kind, and always cheerful.',
    activities: 'Baking pastries, collecting soft things, and helping friends.',
    likes: 'Pastries, fluffy items, sweet smells, and nice weather.',
    dislikes: 'Sadness and rough things.',
    friends: 'Warm and gentle companions.',
    fun: ['Makes delicious pastries for friends.', 'Loves collecting fluffy and soft things.']
  },
  {
    id: 'yoshikitty',
    name: 'Yoshikitty',
    source: 'sanrio images/yoshikitty.jpeg',
    image: 'sanrio images/yoshikitty.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Yoshikitty is a rock-inspired character who loves music and has a cool, edgy style.',
    personality: 'Bold, confident, and passionate about music.',
    activities: 'Playing music, performing on stage, and rocking out with friends.',
    likes: 'Rock music, guitars, performing, and expressing herself.',
    dislikes: 'Silence and boring routines.',
    friends: 'Fellow musicians and creative souls.',
    fun: ['Always has a guitar nearby.', 'Dreams of performing at big concerts.']
  },
  {
    id: 'showbyrock',
    name: 'Show By Rock',
    source: 'sanrio images/showbyrock.jpeg',
    image: 'sanrio images/showbyrock.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Show By Rock is a vibrant music-themed character who loves rhythm, bands, and rocking out.',
    personality: 'Energetic, musical, and full of passion for performance.',
    activities: 'Playing in bands, creating music, and performing for audiences.',
    likes: 'Live music, band performances, rhythm games, and creative expression.',
    dislikes: 'Monotony and lack of creativity.',
    friends: 'Musicians, performers, and music lovers.',
    fun: ['Part of an exciting music universe.', 'Loves jamming with different instruments.']
  },
  {
    id: 'tuxedo-sam',
    name: 'Tuxedo Sam',
    source: 'sanrio images/tuxedo sam.jpeg',
    image: 'sanrio images/tuxedo sam.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Tuxedo Sam is a dapper penguin from Antarctica who speaks many languages and loves fashion.',
    personality: 'Sophisticated, charming, and always well-dressed.',
    activities: 'Collecting bow ties, studying languages, and being a gentleman.',
    likes: 'Bow ties, fashion accessories, learning new things, and being stylish.',
    dislikes: 'Being underdressed and messy appearances.',
    friends: 'Fashionable and cultured companions.',
    fun: ['Owns 365 bow ties, one for each day of the year.', 'Can speak multiple languages fluently.']
  },
  {
    id: 'bonbonribbon',
    name: 'Bonbonribbon',
    source: 'sanrio images/bonbonribbon.jpeg',
    image: 'sanrio images/bonbonribbon.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Bonbonribbon is a sweet bunny who loves fashion, accessories, and making everything pretty.',
    personality: 'Fashionable, cheerful, and always optimistic.',
    activities: 'Designing outfits, accessorizing, and spreading joy with style.',
    likes: 'Ribbons, cute accessories, fashion design, and making things beautiful.',
    dislikes: 'Plain and boring things.',
    friends: 'Stylish and creative companions.',
    fun: ['Has a magical ribbon that can change colors.', 'Dreams of becoming a famous fashion designer.']
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    source: 'sanrio images/cappuccino.jpeg',
    image: 'sanrio images/cappuccino.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Cappuccino is a warm and friendly character who loves coffee, cozy moments, and good company.',
    personality: 'Warm, inviting, and always ready to share a good time.',
    activities: 'Making coffee, hosting friends, and creating cozy atmospheres.',
    likes: 'Coffee, warm drinks, cozy settings, and friendly gatherings.',
    dislikes: 'Cold weather and being alone.',
    friends: 'Coffee lovers and warm-hearted companions.',
    fun: ['Makes the best cappuccino in town.', 'Knows every coffee recipe by heart.']
  },
  {
    id: 'corocorokuririn',
    name: 'Corocorokuririn',
    source: 'sanrio images/corocorokuririn.jpeg',
    image: 'sanrio images/corocorokuririn.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Corocorokuririn is a playful and energetic character who loves to roll around and have fun.',
    personality: 'Energetic, playful, and always in motion.',
    activities: 'Rolling around, playing games, and spreading joy.',
    likes: 'Movement, games, laughter, and active play.',
    dislikes: 'Staying still and boredom.',
    friends: 'Active and fun-loving companions.',
    fun: ['Can roll at amazing speeds.', 'Never stops moving and playing.']
  },
  {
    id: 'gudetama',
    name: 'Gudetama',
    source: 'sanrio images/gudetama.jpeg',
    image: 'sanrio images/gudetama.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Gudetama is a lazy egg who would rather do nothing than anything at all.',
    personality: 'Lethargic, unmotivated, and perpetually tired.',
    activities: 'Lying around, napping, and avoiding responsibility.',
    likes: 'Sleep, relaxation, doing nothing, and being left alone.',
    dislikes: 'Work, effort, and being bothered.',
    friends: 'Other lazy souls who understand the struggle.',
    fun: ['Represents the mood of not wanting to adult.', 'Has become a relatable icon for exhausted people everywhere.']
  },
  {
    id: 'jewelpet',
    name: 'Jewelpet',
    source: 'sanrio images/jewelpet.jpeg',
    image: 'sanrio images/jewelpet.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Jewelpet is a magical character who represents sparkle, jewels, and enchanting adventures.',
    personality: 'Magical, sparkly, and full of wonder.',
    activities: 'Creating magic, collecting jewels, and going on magical adventures.',
    likes: 'Jewels, sparkles, magic, and shiny treasures.',
    dislikes: 'Dullness and lack of magic.',
    friends: 'Magical beings and treasure hunters.',
    fun: ['Has magical jewel powers.', 'Loves all things that sparkle and shine.']
  },
  {
    id: 'marron-cream',
    name: 'Marron Cream',
    source: 'sanrio images/Marron Cream.jpeg',
    image: 'sanrio images/Marron Cream.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Marron Cream is a sweet mouse who loves chestnuts and all things cozy and warm.',
    personality: 'Sweet, gentle, and loves comfort.',
    activities: 'Collecting chestnuts, baking treats, and enjoying autumn.',
    likes: 'Chestnuts, warm weather, cozy places, and sweet treats.',
    dislikes: 'Cold weather and loud noises.',
    friends: 'Forest animals and fellow food lovers.',
    fun: ['Named after chestnuts (marron in French).', 'Loves autumn season the most.']
  },
  {
    id: 'rilu-rilu-fairilu',
    name: 'Rilu Rilu Fairilu',
    source: 'sanrio images/RIilu Rilu Fairilu.jpeg',
    image: 'sanrio images/RIilu Rilu Fairilu.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Rilu Rilu Fairilu is a magical fairy character who brings happiness and magic to everyone.',
    personality: 'Magical, cheerful, and full of wonder.',
    activities: 'Spreading magic, helping others, and going on fairy adventures.',
    likes: 'Magic, flowers, helping friends, and spreading joy.',
    dislikes: 'Sadness and negativity.',
    friends: 'Other fairies and magical creatures.',
    fun: ['Has magical fairy powers.', 'Can make flowers bloom with magic.']
  },
  {
    id: 'umeya-zakkaten',
    name: 'Umeya Zakkaten',
    source: 'sanrio images/umeya zakkaten image.jpeg',
    image: 'sanrio images/umeya zakkaten image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Umeya Zakkaten is a charming character inspired by a traditional Japanese general store, bringing nostalgia and warmth.',
    personality: 'Nostalgic, warm, and welcoming.',
    activities: 'Running a cozy shop, sharing stories, and helping neighbors find treasures.',
    likes: 'Traditional items, friendly conversations, and community gatherings.',
    dislikes: 'Rushing and modern impersonality.',
    friends: 'Longtime neighbors and shoppers who visit often.',
    fun: ['Inspired by old-fashioned general stores.', 'Always has a story to share about each item.']
  },
  {
    id: 'wish-me-mell',
    name: 'Wish Me Mell',
    source: 'sanrio images/wish me mell.jpeg',
    image: 'sanrio images/wish me mell.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Wish Me Mell is a sweet rabbit who loves making wishes and spreading hope to everyone.',
    personality: 'Hopeful, kind, and always optimistic.',
    activities: 'Making wishes, helping dreams come true, and spreading positivity.',
    likes: 'Wishes, stars, dreams, and helping others.',
    dislikes: 'Broken promises and hopelessness.',
    friends: 'Dreamers and hopeful souls.',
    fun: ['Believes all wishes can come true with hope.', 'Loves looking at stars and making wishes.']
  },
  {
    id: 'sugar-bunnies',
    name: 'Sugar Bunnies',
    source: 'sanrio images/sugar bunnies.jpeg',
    image: 'sanrio images/sugar bunnies.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Sugar Bunnies are adorable candy-themed rabbit characters who love sweets and friendship.',
    personality: 'Sweet, playful, and always cheerful.',
    activities: 'Making candy, playing with friends, and spreading sweetness.',
    likes: 'Candy, sweets, friends, and having fun.',
    dislikes: 'Sadness and loneliness.',
    friends: 'Other sweet-loving characters.',
    fun: ['Made of sugary sweetness.', 'Love sharing candy with all their friends.']
  },
  {
    id: 'nya-ni',
    name: 'Nya Ni',
    source: 'sanrio images/nya ni.jpeg',
    image: 'sanrio images/nya ni.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Nya Ni is a cute cat character who loves saying "nya" and spreading cat-like joy.',
    personality: 'Playful, mischievous, and adorably cat-like.',
    activities: 'Playing with yarn, napping in sunbeams, and meowing cutely.',
    likes: 'Toys, catnip, sunny spots, and cuddles.',
    dislikes: 'Baths and being ignored.',
    friends: 'Other cat lovers and playful characters.',
    fun: ['Always says "nya" when happy.', 'Has impeccable cat-like reflexes and charm.']
  },
  {
    id: 'monkichi',
    name: 'Monkichi',
    source: 'sanrio images/monkichi.jpeg',
    image: 'sanrio images/monkichi.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Monkichi is a cheerful monkey character who loves fun and adventure.',
    personality: 'Energetic, playful, and full of mischief.',
    activities: 'Swinging through trees, making friends, and having wild adventures.',
    likes: 'Bananas, fun, adventure, and making people laugh.',
    dislikes: 'Boredom and being serious.',
    friends: 'Adventurous and playful companions.',
    fun: ['Always swinging from branch to branch with joy.', 'Can make anyone smile with antics.']
  },
  {
    id: 'minna-no-tabo',
    name: 'Minna no Tabo',
    source: 'sanrio images/minna no tabo.jpeg',
    image: 'sanrio images/minna no tabo.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Minna no Tabo is a cute hippo character who spreads happiness and friendship.',
    personality: 'Sweet, friendly, and always happy to see others.',
    activities: 'Playing with friends, spreading joy, and enjoying peaceful moments.',
    likes: 'Friends, happiness, nature, and kind gestures.',
    dislikes: 'Sadness and loneliness.',
    friends: 'A wide circle of cheerful companions.',
    fun: ['Loves to share happiness with everyone she meets.', 'Has a calming and sweet presence.']
  },
  {
    id: 'kirimichan',
    name: 'Kirimichan',
    source: 'sanrio images/kirimichan.png',
    image: 'sanrio images/kirimichan.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Kirimichan is a charming shrimp character who brings joy and flavor to every adventure.',
    personality: 'Playful, witty, and full of personality.',
    activities: 'Exploring the ocean, making new friends, and enjoying culinary adventures.',
    likes: 'Good food, adventure, laughter, and creative fun.',
    dislikes: 'Boredom and negativity.',
    friends: 'A diverse group of sea-loving companions.',
    fun: ['Has a unique and quirky sense of humor.', 'Always brings a smile with comedic charm.']
  },
  {
    id: 'hummingmint-sanrio',
    name: 'Hummingmint Sanrio',
    source: 'sanrio images/hummingmint sanrio.jpeg',
    image: 'sanrio images/hummingmint sanrio.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Hummingmint Sanrio is a delightful mint-colored character who brings freshness and joy.',
    personality: 'Cheerful, energetic, and spreads positive vibes.',
    activities: 'Flying through gardens, enjoying nature, and spreading happiness.',
    likes: 'Flowers, nature, sweet flavors, and good friends.',
    dislikes: 'Negativity and stillness.',
    friends: 'A lively group of nature-loving companions.',
    fun: ['Moves with graceful, hummingbird-like energy.', 'Brings mint-fresh positivity everywhere.']
  },
  {
    id: 'hangyodon',
    name: 'Hangyodon',
    source: 'sanrio images/hangyodon.png',
    image: 'sanrio images/hangyodon.png',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Hangyodon is a charming anglerfish character with a unique and adorable appearance.',
    personality: 'Quirky, friendly, and charmingly odd.',
    activities: 'Exploring the deep sea, making unexpected friends, and shining bright.',
    likes: 'Exploring, friendship, unique things, and underwater adventures.',
    dislikes: 'Being alone and darkness.',
    friends: 'A diverse group of sea creatures.',
    fun: ['Uses his light to guide friends through darkness.', 'Has an endearing and unconventional charm.']
  },
  {
    id: 'usahana',
    name: 'U*sa*ha*na',
    source: 'sanrio images/u*sa*ha*na.png',
    image: 'sanrio images/u*sa*ha*na.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'U*sa*ha*na is an adorable bunny character who loves flowers and spreading joy.',
    personality: 'Sweet, gentle, and loves nature.',
    activities: 'Gardening, making flower crowns, and spreading happiness.',
    likes: 'Flowers, nature, friends, and peaceful moments.',
    dislikes: 'Wilted flowers and sadness.',
    friends: 'A circle of nature-loving companions.',
    fun: ['Always has flowers blooming around her.', 'Brings springtime happiness wherever she goes.']
  },
  {
    id: 'pekkle',
    name: 'Pekkle',
    source: 'sanrio images/pekkle.jpeg',
    image: 'sanrio images/pekkle.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Pekkle is a cheerful duck character who loves adventure and making friends.',
    personality: 'Energetic, friendly, and always ready for fun.',
    activities: 'Swimming, exploring, and playing with friends.',
    likes: 'Water, adventure, friends, and sunny days.',
    dislikes: 'Being bored and staying still.',
    friends: 'A lively group of adventurous companions.',
    fun: ['Always quacking with excitement.', 'Loves splashing around in puddles and ponds.']
  },
  {
    id: 'patty-and-jimmy',
    name: 'Patty & Jimmy',
    source: 'sanrio images/patty & jimmy.png',
    image: 'sanrio images/patty & jimmy.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Patty & Jimmy are adorable rabbit siblings who share a special bond and love adventures together.',
    personality: 'Sweet, caring, and inseparable.',
    activities: 'Playing together, exploring, and sharing special moments.',
    likes: 'Each other, family time, adventures, and fun.',
    dislikes: 'Being apart and sadness.',
    friends: 'A close-knit group of caring companions.',
    fun: ['Always looking out for each other.', 'Their bond is unbreakable and heartwarming.']
  },
  {
    id: 'marshmallow-mitaina-fuwafuwa-nyanko',
    name: 'Marshmallow Mitaina Fuwafuwa Nyanko',
    source: 'sanrio images/marshmallow mitaina fuwafuwa nyanko.jpeg',
    image: 'sanrio images/marshmallow mitaina fuwafuwa nyanko.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Marshmallow Mitaina Fuwafuwa Nyanko is an adorably fluffy cat character as soft as a marshmallow.',
    personality: 'Soft, cuddly, and irresistibly sweet.',
    activities: 'Napping in cozy spots, being fluffy, and spreading comfort.',
    likes: 'Softness, warmth, cuddles, and peaceful moments.',
    dislikes: 'Roughness and loud noises.',
    friends: 'A gentle circle of cozy companions.',
    fun: ['As soft and fluffy as a marshmallow cloud.', 'Brings comfort and coziness wherever she goes.']
  },
  {
    id: 'maimai',
    name: 'Maimai',
    source: 'sanrio images/maimai.jpeg',
    image: 'sanrio images/maimai.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Maimai is an adorable lamb character who spreads warmth and happiness wherever she goes.',
    personality: 'Gentle, sweet, and incredibly kind-hearted.',
    activities: 'Playing in meadows, making friends, and spreading joy.',
    likes: 'Flowers, soft grass, friendship, and sunny days.',
    dislikes: 'Cold weather and loneliness.',
    friends: 'A loving circle of caring companions.',
    fun: ['Has the softest wool you could ever imagine.', 'Brings warmth and comfort to everyone around.']
  },
  {
    id: 'ichigoman',
    name: 'Ichigoman',
    source: 'sanrio images/ichigoman.png',
    image: 'sanrio images/ichigoman.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Ichigoman is a strawberry-themed superhero character who fights for justice with sweetness.',
    personality: 'Brave, sweet, and heroic.',
    activities: 'Fighting for justice, protecting friends, and spreading sweetness.',
    likes: 'Strawberries, helping others, justice, and sweet victories.',
    dislikes: 'Injustice and sour attitudes.',
    friends: 'A heroic team of brave companions.',
    fun: ['Combines the power of a superhero with the sweetness of strawberries.', 'Always ready to save the day with berry power.']
  },
  {
    id: 'aggretsuko',
    name: 'Aggretsuko',
    source: 'sanrio images/aggretsuko.jpeg',
    image: 'sanrio images/aggretsuko.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Aggretsuko is a red panda who releases workplace stress through death metal karaoke.',
    personality: 'Polite at work but fierce and passionate inside.',
    activities: 'Working in accounting, karaoke, and venting frustrations through music.',
    likes: 'Death metal, karaoke, letting off steam, and finding balance.',
    dislikes: 'Workplace stress, tedious tasks, and holding back emotions.',
    friends: 'A supportive group of understanding companions.',
    fun: ['Transforms from mild-mannered office worker to death metal queen.', 'Channels stress into powerful musical expression.']
  },
  {
    id: 'paupipo',
    name: 'Paupipo',
    source: 'sanrio images/paupipo.jpeg',
    image: 'sanrio images/paupipo.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Paupipo is a cheerful purple creature who spreads joy and positive energy wherever they go.',
    personality: 'Upbeat, energetic, and always ready to brighten someone\'s day.',
    activities: 'Dancing, singing, and making new friends with infectious enthusiasm.',
    likes: 'Music, celebrations, colorful things, and spreading happiness.',
    dislikes: 'Sadness, boredom, and gloomy atmospheres.',
    friends: 'A wide circle of friends who love their vibrant spirit.',
    fun: ['Has a bouncy, bubbly personality that\'s impossible to resist.', 'Believes every day is a reason to celebrate.']
  },
  {
    id: 'patapatapeppy',
    name: 'Patapatapeppy',
    source: 'sanrio images/patapatapeppy.jpeg',
    image: 'sanrio images/patapatapeppy.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Patapatapeppy is an energetic and fun-loving character known for bringing playful excitement to everything they do.',
    personality: 'Spirited, playful, and full of boundless enthusiasm and mischief.',
    activities: 'Playing games, exploring adventures, and spreading joy through laughter and fun.',
    likes: 'Games, laughter, new adventures, and making friends smile.',
    dislikes: 'Boredom, dull moments, and anything that dampens the fun spirit.',
    friends: 'Surrounded by friends who appreciate their playful and adventurous nature.',
    fun: ['Always ready for the next exciting adventure or game.', 'Has contagious energy that lifts everyone\'s spirits.']
  },
  {
    id: 'the-strawberry-king',
    name: 'The Strawberry King',
    source: 'sanrio images/the strawberry king.png',
    image: 'sanrio images/the strawberry king.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'The Strawberry King is a noble and regal character who rules over a sweet kingdom with kindness and grace.',
    personality: 'Royal, dignified, and sweet-natured.',
    activities: 'Ruling the strawberry kingdom, hosting tea parties, and caring for subjects.',
    likes: 'Strawberries, royal traditions, elegant gatherings, and kindness.',
    dislikes: 'Injustice, rudeness, and anything that threatens harmony.',
    friends: 'A court of loyal and caring companions.',
    fun: ['Rules with both sweetness and strength.', 'Has a crown made of the finest strawberry leaves.']
  },
  {
    id: 'pankunchi',
    name: 'Pankunchi',
    source: 'sanrio images/pankunchi.jpeg',
    image: 'sanrio images/pankunchi.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Pankunchi is a thoughtful and artistic character who appreciates beauty and creative expression in all forms.',
    personality: 'Gentle, imaginative, and deeply appreciative of the world\'s beauty.',
    activities: 'Creating art, enjoying nature, writing, and inspiring others with creativity.',
    likes: 'Art, music, nature, beautiful things, and meaningful conversations.',
    dislikes: 'Ugly things, negativity, and destruction of beauty.',
    friends: 'Close friends who share their passion for art and creativity.',
    fun: ['Has an eye for finding beauty in the smallest details.', 'Creates art that touches the hearts of those around them.']
  },
  {
    id: 'the-runabouts',
    name: 'The Runabouts',
    source: 'sanrio images/the runabouts image.jpeg',
    image: 'sanrio images/the runabouts image.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'The Runabouts are a lively group of adventurous friends who love exploring and having fun together.',
    personality: 'Energetic, adventurous, and always ready for the next exciting journey.',
    activities: 'Exploring new places, going on adventures, playing games, and sharing stories.',
    likes: 'Adventure, freedom, friendship, excitement, and discovering new things.',
    dislikes: 'Staying still, boredom, and missing out on fun.',
    friends: 'A tight-knit group of adventurous companions who share a love for exploration.',
    fun: ['Always on the move and ready for the next adventure.', 'Believes life is best lived with friends by your side.']
  },
  {
    id: 'kashiwankomochi',
    name: 'Kashiwankomochi',
    source: 'sanrio images/kashiwankomochi.jpeg',
    image: 'sanrio images/kashiwankomochi.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Kashiwankomochi is a sweet and gentle character inspired by traditional Japanese confections, embodying warmth and comfort.',
    personality: 'Warm, nurturing, and brings comfort to those around them with their gentle presence.',
    activities: 'Sharing treats with friends, enjoying peaceful moments, and creating cozy atmospheres.',
    likes: 'Sweets, tea time, family gatherings, comfort, and traditional Japanese culture.',
    dislikes: 'Rushing, harshness, and anything that disrupts peaceful moments.',
    friends: 'Close-knit circle of friends who appreciate their warmth and hospitality.',
    fun: ['Inspired by traditional Japanese mochi treats with oak leaves.', 'Always ready to create a warm, welcoming environment for friends.']
  },
  {
    id: 'rururugakuen',
    name: 'Rururugakuen',
    source: 'sanrio images/rururugakuen image.jpeg',
    image: 'sanrio images/rururugakuen image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Rururugakuen is a charming school-themed character who loves learning, friendship, and creating happy memories with classmates.',
    personality: 'Studious, friendly, and enthusiastic about school life and learning together.',
    activities: 'Studying with friends, participating in school activities, and making happy memories.',
    likes: 'School events, friendship, learning new things, and cheerful moments.',
    dislikes: 'Loneliness, skipping class, and missing out on fun school activities.',
    friends: 'Classmates and school friends who share the joy of learning and growing together.',
    fun: ['Believes school is where the best friendships are made.', 'Always ready to help classmates with homework and cheer them on.']
  },
  {
    id: 'hagurumanstyle',
    name: 'Hagurumanstyle',
    source: 'sanrio images/hagurumanstyle.jpeg',
    image: 'sanrio images/hagurumanstyle.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Hagurumanstyle is a stylish and fashion-forward character who loves expressing themselves through creative and trendy designs.',
    personality: 'Fashionable, confident, and always on top of the latest trends and styles.',
    activities: 'Fashion design, styling friends, shopping, and creating unique looks.',
    likes: 'Fashion, trendy designs, colors, accessories, and self-expression.',
    dislikes: 'Outdated styles, boring fashion, and lack of creativity.',
    friends: 'A fashionable circle of friends who share their passion for style.',
    fun: ['Sets trends rather than follows them.', 'Can make any outfit look completely stylish and put-together.']
  },
  {
    id: 'tiny-chum',
    name: 'Tiny Chum',
    source: 'sanrio images/tiny chum.png',
    image: 'sanrio images/tiny chum.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Tiny Chum is an adorable small character who proves that great things come in tiny packages.',
    personality: 'Small but mighty, cheerful, and full of heart.',
    activities: 'Making big impacts, spreading joy, and showing that size doesn\'t matter.',
    likes: 'Friendship, adventure, proving doubters wrong, and big dreams.',
    dislikes: 'Being underestimated and feeling left out.',
    friends: 'A supportive group of all-sized companions.',
    fun: ['Never lets small size stop big dreams.', 'Has the biggest heart in the tiniest package.']
  },
  {
    id: 'the-vaudeville-duo',
    name: 'The Vaudeville Duo',
    source: 'sanrio images/the vaudeville duo.jpeg',
    image: 'sanrio images/the vaudeville duo.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'The Vaudeville Duo is a charming pair of performers who bring classic entertainment and joy.',
    personality: 'Theatrical, entertaining, and always putting on a show.',
    activities: 'Performing, entertaining crowds, and spreading laughter through classic acts.',
    likes: 'Stage performances, applause, comedy, and making people smile.',
    dislikes: 'Silent audiences and stage fright.',
    friends: 'A lively troupe of performers and entertainers.',
    fun: ['Masters of classic vaudeville entertainment.', 'Their comedy routines never fail to delight.']
  },
  {
    id: 'risuru',
    name: 'Risuru',
    source: 'sanrio images/risuru image.png',
    image: 'sanrio images/risuru image.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Risuru is a charming and delightful character who brings joy and sweetness to everyone around.',
    personality: 'Sweet, gentle, and always ready to brighten someone\'s day with kindness.',
    activities: 'Spreading happiness, making new friends, and enjoying peaceful moments.',
    likes: 'Friendship, kindness, beautiful flowers, and sweet treats.',
    dislikes: 'Sadness, conflict, and anything that disrupts harmony.',
    friends: 'A loving circle of friends who appreciate their gentle nature.',
    fun: ['Has the sweetest smile that can brighten anyone\'s day.', 'Believes kindness is the most beautiful thing in the world.']
  },
  {
    id: 'sugarminuet',
    name: 'Sugarminuet',
    source: 'sanrio images/sugarminuet.jpeg',
    image: 'sanrio images/sugarminuet.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Sugarminuet is a sweet and elegant character who dances through life with grace and charm.',
    personality: 'Graceful, elegant, and delightfully sweet.',
    activities: 'Dancing, performing elegant routines, and spreading sweetness.',
    likes: 'Music, dance, elegance, and sweet treats.',
    dislikes: 'Clumsiness and sour attitudes.',
    friends: 'A refined group of artistic companions.',
    fun: ['Dances with the grace of a sugar plum fairy.', 'Every movement is a sweet performance.']
  },
  {
    id: 'puchipuchiwanko',
    name: 'Puchipuchiwanko',
    source: 'sanrio images/puchipuchiwanko image.jpeg',
    image: 'sanrio images/puchipuchiwanko image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Puchipuchiwanko is an adorable little puppy character full of energy and playful spirit.',
    personality: 'Playful, energetic, and endlessly enthusiastic about life and adventure.',
    activities: 'Playing fetch, running around, making new friends, and enjoying outdoor activities.',
    likes: 'Playing, treats, belly rubs, sunny days, and making friends.',
    dislikes: 'Being alone, staying still for too long, and rainy days that prevent playtime.',
    friends: 'A playful pack of puppy pals and animal friends.',
    fun: ['Can turn anything into a fun game.', 'Has endless energy and an infectious enthusiasm for life.']
  },
  {
    id: 'pinkylilrose',
    name: 'Pinkylilrose',
    source: 'sanrio images/pinkylilrose and rioskypeace image.png',
    image: 'sanrio images/pinkylilrose and rioskypeace image.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Pinkylilrose is a lovely, delicate character with a gentle nature and a passion for flowers.',
    personality: 'Gentle, romantic, and always finds beauty in the smallest things.',
    activities: 'Gardening, arranging flowers, enjoying peaceful walks, and admiring nature.',
    likes: 'Roses, spring days, soft colors, and tranquil moments.',
    dislikes: 'Harsh weather, wilted flowers, and negativity.',
    friends: 'A garden of nature-loving companions.',
    fun: ['Can make any garden bloom brighter.', 'Has a special connection with all things floral.']
  },
  {
    id: 'rioskypeace',
    name: 'Rioskypeace',
    source: 'sanrio images/pinkylilrose and rioskypeace image.png',
    image: 'sanrio images/pinkylilrose and rioskypeace image.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Rioskypeace is a serene character who embodies tranquility and brings calm wherever they go.',
    personality: 'Peaceful, calm, and radiates a soothing presence that comforts everyone.',
    activities: 'Meditation, cloud watching, spreading peace, and helping friends find inner calm.',
    likes: 'Clear skies, quiet moments, harmony, and gentle breezes.',
    dislikes: 'Chaos, conflict, and stressful situations.',
    friends: 'A peaceful circle of zen companions.',
    fun: ['Can find peace in any situation.', 'Has the ability to calm even the most anxious hearts.']
  },
  {
    id: 'goropikadopn',
    name: 'Goropikadopn',
    source: 'sanrio images/goropikadopn.jpeg',
    image: 'sanrio images/goropikadopn.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Goropikadopn is a bouncy, energetic character known for playful antics and a bright personality.',
    personality: 'Playful, mischievous, and endlessly curious.',
    activities: 'Playing pranks, dancing, and brightening everyone\'s day.',
    likes: 'Games, laughter, colorful things, and making new friends.',
    dislikes: 'Boredom and long lectures.',
    friends: 'A group of spirited pals who join in the fun.',
    fun: ['Can create impromptu dance parties.', 'Has a contagious laugh that lifts moods.']
  },
  {
    id: 'fufu-chan',
    name: 'Fufu Chan',
    source: 'sanrio images/fufu chan.png',
    image: 'sanrio images/fufu chan.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Fufu Chan is a sweet and gentle character with a warm heart and a love for simple joys.',
    personality: 'Gentle, caring, and always ready to listen and support friends.',
    activities: 'Enjoying quiet moments, helping friends, and appreciating nature.',
    likes: 'Soft things, tea time, meaningful conversations, and peaceful days.',
    dislikes: 'Conflict, loud arguments, and unnecessary drama.',
    friends: 'A close circle of thoughtful and sincere companions.',
    fun: ['Has a soothing presence that calms everyone around them.', 'Loves brewing special herbal teas for friends.']
  },
  {
    id: 'peter-davis',
    name: 'Peter Davis',
    source: 'sanrio images/peter davis.png',
    image: 'sanrio images/peter davis.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Peter Davis is a charming and distinguished character with a friendly demeanor and a love for classic adventures.',
    personality: 'Friendly, adventurous, and always ready for a new experience with a touch of class.',
    activities: 'Exploring new places, meeting interesting characters, and sharing stories of adventure.',
    likes: 'Travel, good company, classic tales, and discovering hidden treasures.',
    dislikes: 'Staying in one place too long, rudeness, and boring routines.',
    friends: 'A diverse group of adventurers and storytellers.',
    fun: ['Has traveled to more places than most can dream of.', 'Always has a fascinating story to share from past adventures.']
  },
  {
    id: 'dreamtale-kubear',
    name: 'Dreamtale Kubear',
    source: 'sanrio images/dreamtale kubear.png',
    image: 'sanrio images/dreamtale kubear.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Dreamtale Kubear is a magical bear character from a dreamland who brings wonder and imagination to life.',
    personality: 'Whimsical, imaginative, and full of wonder about the world.',
    activities: 'Exploring dreamscapes, creating magical moments, and inspiring imagination.',
    likes: 'Dreams, stars, magical creatures, and fantastical adventures.',
    dislikes: 'Nightmares, reality crushing dreams, and losing wonder.',
    friends: 'A circle of imaginative and dreamy companions.',
    fun: ['Can travel between dreams and reality.', 'Leaves trails of stardust wherever they go.']
  },
  {
    id: 'shinkansen',
    name: 'Shinkansen',
    source: 'sanrio images/shinkansen.png',
    image: 'sanrio images/shinkansen.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Shinkansen is a speedy bullet train character who loves fast-paced adventures and reaching destinations.',
    personality: 'Fast, efficient, and always on time.',
    activities: 'Racing along tracks, transporting friends, and exploring new destinations.',
    likes: 'Speed, punctuality, adventure, and new routes.',
    dislikes: 'Delays and being stuck in place.',
    friends: 'A network of travel-loving companions.',
    fun: ['Named after Japan\'s famous bullet train system.', 'Can reach destinations with incredible speed and precision.']
  },
  {
    id: 'nyokki-and-penne',
    name: 'Nyokki & Penne',
    source: 'sanrio images/nyokki & penne.jpeg',
    image: 'sanrio images/nyokki & penne.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Nyokki & Penne are an adorable duo inspired by pasta, bringing warmth and comfort wherever they go.',
    personality: 'Warm, comforting, and always there to cheer up friends with their delightful presence.',
    activities: 'Cooking together, sharing meals, spreading joy, and enjoying cozy moments.',
    likes: 'Good food, friendship, family dinners, and creating delicious memories.',
    dislikes: 'Being separated, cold meals, and rushed eating.',
    friends: 'A cozy circle of food-loving companions.',
    fun: ['Named after Italian pasta varieties gnocchi and penne.', 'Believe the best moments happen around a shared meal.']
  },
  {
    id: 'noranekoland',
    name: 'Noranekoland',
    source: 'sanrio images/noranekoland image.png',
    image: 'sanrio images/noranekoland image.png',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Noranekoland is a whimsical cat character who brings joy and playfulness to a magical world of feline friends.',
    personality: 'Playful, curious, and always ready to explore new adventures with feline charm.',
    activities: 'Exploring magical lands, playing with friends, and discovering hidden wonders.',
    likes: 'Adventure, cat friends, playful games, and magical discoveries.',
    dislikes: 'Boredom, staying indoors, and missing out on fun.',
    friends: 'A magical circle of cat companions and adventurous friends.',
    fun: ['Lives in a whimsical land filled with cat magic.', 'Can turn any ordinary day into a playful adventure.']
  },
  {
    id: 'shinkaizoku',
    name: 'Shinkaizoku',
    source: 'sanrio images/shinkaizoku.jpeg',
    image: 'sanrio images/shinkaizoku.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Shinkaizoku is an adventurous pirate character who sails the seas seeking treasure and excitement.',
    personality: 'Brave, adventurous, and always ready for a treasure hunt.',
    activities: 'Sailing the seas, searching for treasure, and going on daring adventures.',
    likes: 'Treasure, adventure, the open sea, and freedom.',
    dislikes: 'Being landlocked and boredom.',
    friends: 'A crew of loyal seafaring companions.',
    fun: ['Commands a ship with courage and skill.', 'Every adventure is a quest for new treasures.']
  },
  {
    id: 'pokopons-diary',
    name: 'Pokopon\'s Diary',
    source: 'sanrio images/pokopon\'s diary.png',
    image: 'sanrio images/pokopon\'s diary.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Pokopon\'s Diary is a charming character who documents daily adventures and precious moments.',
    personality: 'Thoughtful, observant, and cherishes every memory.',
    activities: 'Writing in diary, documenting adventures, and preserving memories.',
    likes: 'Journaling, memories, quiet moments, and reflection.',
    dislikes: 'Forgotten moments and lost memories.',
    friends: 'A circle of memorable companions.',
    fun: ['Every page tells a special story.', 'Treasures each moment like a precious memory.']
  },
  {
    id: 'mimicmike',
    name: 'Mimicmike',
    source: 'sanrio images/mimicmike image.png',
    image: 'sanrio images/mimicmike image.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Mimicmike is a clever and playful character who loves to imitate friends and create fun moments.',
    personality: 'Playful, clever, and loves to make others laugh with impressions and mimicry.',
    activities: 'Imitating friends, creating funny moments, and entertaining everyone with performances.',
    likes: 'Comedy, impressions, laughter, and making friends smile.',
    dislikes: 'Serious moods, being misunderstood, and boring situations.',
    friends: 'A lively group of entertainment-loving companions.',
    fun: ['Can perfectly mimic any friend\'s voice or mannerisms.', 'Turns every gathering into a comedy show.']
  },
  {
    id: 'mewkledreamy',
    name: 'Mewkledreamy',
    source: 'sanrio images/mewkledreamy image.jpeg',
    image: 'sanrio images/mewkledreamy image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Mewkledreamy is a magical dream character who visits during sleep to bring wonderful dreams and protect peaceful slumber.',
    personality: 'Magical, gentle, and dedicated to creating beautiful dreams for everyone.',
    activities: 'Creating sweet dreams, protecting sleep, and spreading nighttime magic.',
    likes: 'Peaceful sleep, beautiful dreams, stars, and helping others rest well.',
    dislikes: 'Nightmares, sleepless nights, and anything that disturbs peaceful rest.',
    friends: 'A dreamy circle of nighttime companions and guardians.',
    fun: ['Can transform dreams into reality with special dream magic.', 'Travels through the dream world to help friends sleep peacefully.']
  },
  {
    id: 'marumofubiyori',
    name: 'Marumofubiyori',
    source: 'sanrio images/marumofubiyori image.png',
    image: 'sanrio images/marumofubiyori image.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Marumofubiyori is a round and fluffy character who enjoys peaceful days filled with simple pleasures and relaxation.',
    personality: 'Relaxed, peaceful, and finds joy in the simple pleasures of everyday life.',
    activities: 'Enjoying sunny days, relaxing in nature, taking naps, and appreciating small moments.',
    likes: 'Sunny weather, cozy naps, gentle breezes, and tranquil moments.',
    dislikes: 'Stress, rushing, and chaotic situations.',
    friends: 'A calm circle of peaceful companions who enjoy life\'s simple joys.',
    fun: ['Believes the best days are the calm and peaceful ones.', 'Can find comfort and happiness in any quiet moment.']
  },
  {
    id: 'lookyloo',
    name: 'Lookyloo',
    source: 'sanrio images/lookyloo image.jpeg',
    image: 'sanrio images/lookyloo image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Lookyloo is a curious and observant character who loves to explore the world and discover new things.',
    personality: 'Curious, observant, and always eager to see what\'s around the next corner.',
    activities: 'Exploring new places, observing interesting things, and discovering hidden treasures.',
    likes: 'Exploration, new discoveries, interesting sights, and learning about the world.',
    dislikes: 'Missing out, being stuck indoors, and not having anything new to see.',
    friends: 'An adventurous group of explorers and curious companions.',
    fun: ['Has the keenest eyes and never misses a detail.', 'Can spot interesting things that others overlook.']
  },
  {
    id: 'littlelovin',
    name: 'Littlelovin',
    source: 'sanrio images/littlelovin image.jpeg',
    image: 'sanrio images/littlelovin image.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Littlelovin is a tender-hearted character who spreads love and affection to everyone they meet.',
    personality: 'Loving, affectionate, and always ready to show care and warmth to friends.',
    activities: 'Spreading love and kindness, giving warm hugs, and creating heartfelt moments.',
    likes: 'Love, friendship, warm hugs, and making others feel cherished.',
    dislikes: 'Coldness, loneliness, and heartlessness.',
    friends: 'A caring circle of loving and affectionate companions.',
    fun: ['Has an endless capacity for love and affection.', 'Can make anyone feel loved and valued with their warm presence.']
  },
  {
    id: 'littleforestfellow',
    name: 'Littleforestfellow',
    source: 'sanrio images/littleforestfellow image.png',
    image: 'sanrio images/littleforestfellow image.png',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Littleforestfellow is a nature-loving character who lives in harmony with the forest and its woodland creatures.',
    personality: 'Gentle, earthy, and connected to nature and all living things.',
    activities: 'Exploring the forest, caring for woodland creatures, and enjoying natural surroundings.',
    likes: 'Nature, forests, animals, fresh air, and peaceful woodland settings.',
    dislikes: 'Pollution, deforestation, and destruction of nature.',
    friends: 'A circle of nature-loving companions and woodland friends.',
    fun: ['Can communicate with forest animals in special ways.', 'Brings the magic of the forest wherever they go.']
  },
  {
    id: 'kabukinyantaro',
    name: 'Kabukinyantaro',
    source: 'sanrio images/kabukinyantaro.jpeg',
    image: 'sanrio images/kabukinyantaro.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Kabukinyantaro is a theatrical character inspired by traditional kabuki performance art with dramatic flair and style.',
    personality: 'Theatrical, dramatic, and always ready to put on a show with traditional elegance.',
    activities: 'Performing kabuki arts, perfecting theatrical techniques, and entertaining with traditional style.',
    likes: 'Theater, traditional arts, dramatic performances, and cultural traditions.',
    dislikes: 'Modern simplicity, dull performances, and losing tradition.',
    friends: 'A circle of artistic and theatrical companions.',
    fun: ['Masters the dramatic arts of traditional kabuki theater.', 'Can steal the show with theatrical presence and style.']
  },
  {
    id: 'honeymomo',
    name: 'Honeymomo',
    source: 'sanrio images/honeymomo image.png',
    image: 'sanrio images/honeymomo image.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Honeymomo is a sweet and delightful character who spreads joy with the warmth of honey and the freshness of peaches.',
    personality: 'Sweet, warm, and brings comfort and happiness wherever they go.',
    activities: 'Sharing sweet treats, spreading warmth and joy, and creating delightful moments.',
    likes: 'Honey, peaches, sweet treats, warmth, and spreading happiness.',
    dislikes: 'Bitterness, cold attitudes, and sad moments.',
    friends: 'A sweet circle of caring and warm-hearted companions.',
    fun: ['Has the sweetness of honey and the freshness of peaches.', 'Can turn any day sweeter just by being around.']
  },
  {
    id: 'framboiloulou',
    name: 'Framboiloulou',
    source: 'sanrio images/framboiloulou image.jpeg',
    image: 'sanrio images/framboiloulou image.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Framboiloulou is a cheerful and delightful character inspired by raspberries with a bubbly personality.',
    personality: 'Cheerful, bubbly, and full of infectious energy and happiness.',
    activities: 'Spreading cheerfulness, making friends laugh, and creating fun-filled moments.',
    likes: 'Laughter, joy, berries, colorful things, and bringing smiles to faces.',
    dislikes: 'Sadness, dullness, and negativity.',
    friends: 'A circle of joyful and upbeat companions.',
    fun: ['Has the color and sweetness of fresh raspberries.', 'Can brighten anyone\'s day with infectious enthusiasm.']
  },
  {
    id: 'darkgrapenman',
    name: 'Darkgrapenman',
    source: 'sanrio images/darkgrapenman image.png',
    image: 'sanrio images/darkgrapenman image.png',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Darkgrapenman is a mysterious and sophisticated character inspired by dark grapes with a cool demeanor.',
    personality: 'Cool, mysterious, and sophisticated with a calm and collected presence.',
    activities: 'Enjoying quiet moments, appreciating fine things, and maintaining composure.',
    likes: 'Sophistication, mystery, quiet moments, grapes, and refined tastes.',
    dislikes: 'Chaos, loudness, and lack of elegance.',
    friends: 'A circle of sophisticated and calm companions.',
    fun: ['Has the deep color and rich flavor of fine dark grapes.', 'Maintains cool composure in any situation.']
  },
  {
    id: 'cottontails',
    name: 'Cottontails',
    source: 'sanrio images/cottontails image.png',
    image: 'sanrio images/cottontails image.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Cottontails is an adorable group of fluffy characters known for their softness and playful nature.',
    personality: 'Soft, gentle, playful, and full of childlike wonder and cuteness.',
    activities: 'Hopping around, playing together, making new friends, and spreading cuteness.',
    likes: 'Soft things, fluffy moments, playtime, friendship, and cuddles.',
    dislikes: 'Rough treatment, being alone, and sadness.',
    friends: 'A group of equally fluffy and adorable companions.',
    fun: ['Has the softest cotton-like tails.', 'Can melt hearts with their boundless cuteness and playfulness.']
  },
  {
    id: 'cogimyun',
    name: 'Cogimyun',
    source: 'sanrio images/cogimyun image.jpeg',
    image: 'sanrio images/cogimyun image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Cogimyun is a delightful character inspired by seaweed with a playful and quirky personality.',
    personality: 'Playful, quirky, and full of unique charm and unexpected surprises.',
    activities: 'Playing tricks, making friends laugh, exploring the ocean, and having underwater adventures.',
    likes: 'Seaweed, water, playfulness, surprises, and making friends smile.',
    dislikes: 'Being predictable, staying still, and dull moments.',
    friends: 'A circle of quirky and adventurous underwater friends.',
    fun: ['Has the unique charm of the sea with seaweed inspiration.', 'Can surprise anyone with unexpected playful antics.']
  },
  {
    id: 'cocoa-and-vanilla',
    name: 'Cocoa and Vanilla',
    source: 'sanrio images/cocoa and vanilla image.jpeg',
    image: 'sanrio images/cocoa and vanilla image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Cocoa and Vanilla are a dynamic duo of sweet characters who share a special bond and adventure together.',
    personality: 'Warm, friendly, supportive, and always there for each other with plenty of charm and sweetness.',
    activities: 'Sharing adventures, helping friends, creating sweet moments, and exploring the world together.',
    likes: 'Friendship, sweetness, togetherness, comfort, and having fun adventures with each other.',
    dislikes: 'Being separated, sadness, unkindness, and missing their best friend.',
    friends: 'They are best friends with each other and love making new friends everywhere they go.',
    fun: ['Cocoa and Vanilla represent the perfect balance of dark and light sweetness.', 'Their friendship is unbreakable and they never miss a chance to celebrate it.']
  },
  {
    id: 'chunenheroine-ojisan',
    name: 'Chunenheroine Ojisan',
    source: 'sanrio images/chunenheroine ojisan\'s image.jpeg',
    image: 'sanrio images/chunenheroine ojisan\'s image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Chunenheroine Ojisan is a charming, elderly gentleman character who brings wisdom and warmth to his stories.',
    personality: 'Kind-hearted, wise, cheerful, and full of nostalgic charm and gentle humor.',
    activities: 'Sharing stories, helping others with advice, enjoying peaceful moments, and reminiscing about good memories.',
    likes: 'Good stories, helping friends, tea time, peaceful moments, and meaningful conversations.',
    dislikes: 'Rudeness, being ignored, confusion, and unkindness toward others.',
    friends: 'A circle of younger and older friends who enjoy his company and wisdom.',
    fun: ['Despite his age, he has a playful spirit and loves making others smile.', 'His stories always carry lessons and warmth that people treasure.']
  },
  {
    id: 'chibimaru',
    name: 'Chibimaru',
    source: 'sanrio images/chibimaru image.jpeg',
    image: 'sanrio images/chibimaru image.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Chibimaru is a tiny, round character bursting with cuteness and endless enthusiasm for adventure.',
    personality: 'Cheerful, energetic, optimistic, and overflowing with childlike joy and playfulness.',
    activities: 'Exploring the world, making new friends, going on adventures, and having fun in every moment.',
    likes: 'Adventures, sweets, friendship, playfulness, and discovering new things.',
    dislikes: 'Boredom, sadness, being told to stay still, and not having fun.',
    friends: 'A group of enthusiastic and adventurous companions who love exploring with Chibimaru.',
    fun: ['Despite being tiny, Chibimaru has a huge personality and boundless energy.', 'Chibimaru\'s round shape and big smile can brighten anyone\'s day instantly.']
  },
  {
    id: 'cherina-cherine',
    name: 'Cherina Cherine',
    source: 'sanrio images/cherina cherine image.jpeg',
    image: 'sanrio images/cherina cherine image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Cherina Cherine is a delightful character with a sweet and charming personality that brings joy wherever she goes.',
    personality: 'Sweet, kind-hearted, gentle, and full of grace with a naturally cheerful disposition.',
    activities: 'Making friends, spreading kindness, enjoying peaceful moments, and creating happy memories.',
    likes: 'Kindness, friendship, beautiful things, gentle moments, and helping others smile.',
    dislikes: 'Rudeness, conflict, sadness, and anything that hurts her friends.',
    friends: 'A loving circle of friends who appreciate her sweetness and gentle nature.',
    fun: ['Cherina Cherine\'s charm comes from her genuine care for everyone around her.', 'Her sweet nature and kind words have a way of brightening even the darkest days.']
  },
  {
    id: 'craibadix',
    name: 'Craibadix',
    source: 'sanrio images/craibadix image.jpeg',
    image: 'sanrio images/craibadix image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Craibadix is a unique and whimsical character with a distinctive personality and creative spirit.',
    personality: 'Creative, quirky, imaginative, and full of unexpected charm and surprising ideas.',
    activities: 'Creating art, dreaming up new ideas, exploring imagination, and sharing creative thoughts.',
    likes: 'Creativity, imagination, unique things, self-expression, and artistic pursuits.',
    dislikes: 'Being ordinary, following trends, restrictions on creativity, and dull moments.',
    friends: 'A circle of creative and imaginative friends who appreciate Craibadix\'s unique perspective.',
    fun: ['Craibadix sees the world through a creative lens that brings magic to everyday moments.', 'Their imaginative spirit inspires others to think outside the box and embrace uniqueness.']
  },
  {
    id: 'button-nose',
    name: 'Button Nose',
    source: 'sanrio images/button nose image.jpeg',
    image: 'sanrio images/button nose image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Button Nose is an adorably cute character with a distinctive button nose that makes everyone smile.',
    personality: 'Adorable, sweet, innocent, and full of childlike wonder and irresistible charm.',
    activities: 'Playing with friends, exploring the world with curiosity, spreading cuteness, and making everyone smile.',
    likes: 'Cuddles, warm hugs, playtime, gentle touches, and making others happy.',
    dislikes: 'Loud noises, being alone, scary things, and anything that disturbs peaceful moments.',
    friends: 'A warm group of caring friends who love Button Nose\'s adorable charm and sweet nature.',
    fun: ['Button Nose\'s signature button nose is the cutest feature that everyone adores.', 'Their innocent expressions and sweet demeanor can melt even the coldest hearts.']
  },
  {
    id: 'badtz-maru',
    name: 'Badtz Maru',
    source: 'sanrio images/badtz maru.png',
    image: 'sanrio images/badtz maru.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Badtz Maru is a mischievous penguin from Gorgeoustown who dreams of becoming the boss of everything.',
    personality: 'Rebellious, sassy, independent, and full of attitude with a secretly soft heart.',
    activities: 'Plotting schemes, skateboarding, playing pranks, and hanging out with his alligator friend Pochi.',
    likes: 'Being in charge, his pet alligator Pochi, rock music, and causing a little mischief.',
    dislikes: 'Being told what to do, overly sweet things, and authority figures.',
    friends: 'Pochi the alligator and a crew of equally rebellious companions.',
    fun: ['Despite his tough exterior, he secretly enjoys cute things.', 'His dream is to become the boss of everything one day.']
  },
  {
    id: 'darkgrapeman',
    name: 'Darkgrapeman',
    source: 'sanrio images/darkgrapeman image.png',
    image: 'sanrio images/darkgrapeman image.png',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Darkgrapeman is a mysterious and cool character with a unique grape-inspired appearance and heroic spirit.',
    personality: 'Cool, mysterious, brave, and full of quiet confidence with a heroic heart.',
    activities: 'Protecting friends, solving mysteries, helping those in need, and maintaining justice with style.',
    likes: 'Justice, grapes, nighttime, helping others, and maintaining a cool presence.',
    dislikes: 'Injustice, troublemakers, bright lights that ruin the mood, and anything unfair.',
    friends: 'A loyal group of companions who admire Darkgrapeman\'s courage and mysterious charm.',
    fun: ['Darkgrapeman\'s grape-themed appearance and mysterious aura make them unforgettable.', 'Despite the cool exterior, Darkgrapeman has a warm heart dedicated to helping friends.']
  },
  {
    id: 'caribadix',
    name: 'Caribadix',
    source: 'sanrio images/caribadix image.jpeg',
    image: 'sanrio images/caribadix image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Caribadix is a unique and whimsical character with a creative spirit and adventurous personality.',
    personality: 'Creative, adventurous, quirky, and full of imagination with a playful energy.',
    activities: 'Exploring new ideas, creating art, going on adventures, and discovering unique treasures.',
    likes: 'Creativity, adventures, unique finds, self-expression, and colorful experiences.',
    dislikes: 'Boredom, following the crowd, routine, and being told what to do.',
    friends: 'A circle of creative and adventurous companions who appreciate Caribadix\'s unique perspective.',
    fun: ['Caribadix has an eye for finding beauty in unexpected places.', 'Their creative spirit inspires others to think outside the box and embrace their uniqueness.']
  }
];

// Keep a backup map of the original fallback profiles so we can restore if an accidental merge
// overwrote canonical entries.
const originalFallbackMap = {};
fallbackCharacters.forEach(c => { originalFallbackMap[c.id] = JSON.parse(JSON.stringify(c)); });

// Auto-generate additional placeholder entries from asset filenames.
// Group assets with the same base name (e.g. 'pom1.png' and 'pom2.png') into one character entry.
const assetFilenames = [
  'aggretsuko.jpeg',
  'badtz maru.png',
  'baku.png',
  'bonbonribbon.jpeg',
  'cappuccino.jpeg',
  'charmmy kitty.jpeg',
  'cheery chums.jpeg',
  'chiffon.jpeg',
  'chococat.jpeg',
  'cinnamoroll.png',
  'corocorokuririn.jpeg',
  'dear daniel.png',
  'dreamtale kubear.png',
  'fufu chan.png',
  'goropikadopn.jpeg',
  'gudetama.jpeg',
  'hagurumanstyle.jpeg',
  'hangyodon.png',
  'hello kitty.png',
  'hummingmint sanrio.jpeg',
  'ichigoman.png',
  'jewelpet.jpeg',
  'kashiwankomochi.jpeg',
  'keroppi.jpeg',
  'kirimichan.png',
  'kuromi.png',
  'lloromannic.jpeg',
  'maimai.jpeg',
  'Marron Cream.jpeg',
  'marshmallow mitaina fuwafuwa nyanko.jpeg',
  'minna no tabo.jpeg',
  'mocha.jpeg',
  'monkichi.jpeg',
  'my little twin stars.png',
  'my melody.jpeg',
  'my sweet piano.jpeg',
  'nya ni.jpeg',
  'pankunchi.jpeg',
  'patapatapeppy.jpeg',
  'patty & jimmy.png',
  'paupipo.jpeg',
  'pekkle.jpeg',
  'pochacco.png',
  'pokopon\'s diary.png',
  'pompompurin.jpeg',
  'poron.jpeg',
  'RIilu Rilu Fairilu.jpeg',
  'shinkaizoku.jpeg',
  'shinkansen.png',
  'showbyrock.jpeg',
  'sugar bunnies.jpeg',
  'sugarminuet.jpeg',
  'the strawberry king.png',
  'the vaudeville duo.jpeg',
  'tiny chum.png',
  'tuxedo sam.jpeg',
  'u*sa*ha*na.png',
  'wish me mell.jpeg',
  'yoshikitty.jpeg'
];

function slugify(name){
  return name.toLowerCase().replace(/\.[^/.]+$/, '').replace(/[ _]+/g,'-').replace(/[^a-z0-9\-]/g,'');
}

function titleFromBase(base){
  const b = base.replace(/[_\-]+/g,' ').trim();
  return b.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
}

const palette = ['var(--pink)','var(--baby-blue)','var(--lavender)','var(--soft-yellow)'];

// Deterministic birthday generator based on id string.
const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
function generateBirthdayFromId(id){
  if(!id) return 'Unknown';
  let sum = 0;
  for(let i=0;i<id.length;i++) sum += id.charCodeAt(i);
  const month = sum % 12; // 0-11
  const day = (sum % 28) + 1; // 1-28 to be safe
  return `${monthNames[month]} ${day}`;
}

// Group by base name (remove extension and trailing digits/spaces)
const groups = {};
assetFilenames.forEach(fn=>{
  const noExt = fn.replace(/\.[^/.]+$/,'');
  const base = noExt.replace(/\s*\d+$/,'').trim();
  const key = base.toLowerCase();
  groups[key] = groups[key] || [];
  groups[key].push(fn);
});

// Manual overrides for certain base keys (from asset filenames) to set proper names/ids
// Use the full, canonical names you prefer (e.g. 'My Sweet Piano')
const manualOverrides = {
  'sp': { id: 'my-sweet-piano', name: 'My Sweet Piano' },
  'pom': { id: 'pompompurin', name: 'Pompompurin' },
  'po': { id: 'poron', name: 'Poron' }
};

const generated = Object.keys(groups).map((base,i)=>{
  const sources = groups[base];
  // apply manual overrides when present
  const override = manualOverrides[base];
  const id = override && override.id ? override.id : (slugify(base) || `asset-${i}`);
  const name = override && override.name ? override.name : (titleFromBase(base) || `Character ${i+1}`);
  return {
    id,
    name,
    // keep list of related asset filenames as metadata
    sources: sources.map(s=>`assets/${s}`),
    source: `assets/${sources[0]}`,
    // deterministic placeholder birthday (editable by user)
    birthday: generateBirthdayFromId(id),
    useImage: false,
    bg: palette[i % palette.length],
    origin: `${name} originates from the world of cute companions in this demo.`,
    personality: 'Friendly, playful, and full of charm.',
    activities: 'Spending time with friends, collecting cute items, and enjoying cozy snacks.',
    likes: 'Sweet treats and warm hugs.',
    dislikes: 'Being alone and spilled milk.',
    friends: 'Local pals and neighborhood characters.',
    fun: ['This is a generated placeholder profile based on the asset filename.']
  };
});

// Append generated entries that don't already exist in fallbackCharacters (by id)
const existingIds = new Set(fallbackCharacters.map(c=>c.id));
generated.forEach(g=>{ if(!existingIds.has(g.id)) fallbackCharacters.push(g); });

const state = {
  favorites: new Set(JSON.parse(localStorage.getItem('favorites') || '[]'))
};

function saveFavorites(){
  localStorage.setItem('favorites', JSON.stringify(Array.from(state.favorites)));
}

function renderCharacters(list = characters, containerId = 'cards'){
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  list.forEach(ch => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.background = ch.bg || 'var(--pink)';

    // We intentionally do not load the original photo. Use a cute placeholder instead.
    const initial = ch.name.split(' ').map(s=>s[0]).slice(0,2).join('');
    const imgHtml = (ch.useImage && ch.image) ? `<img src="${encodeURI(ch.image)}" alt="${ch.name}">` : `<div class="placeholder-emoji">${initial}</div>`;

    card.innerHTML = `
      <div class="card-img" aria-hidden="true">${imgHtml}</div>
      <h3>${ch.name}</h3>
      <div class="card-bday">${ch.birthday ? `🎂 ${ch.birthday}` : ''}</div>
      <div class="actions"><button class="heart-btn" data-id="${ch.id}">${state.favorites.has(ch.id) ? '💖' : '🤍'}</button></div>
    `;

    // Open detail unless heart button clicked
    card.addEventListener('click', (e)=>{
      if(e.target && e.target.classList.contains('heart-btn')) return;
      openDetail(ch.id);
    });

    card.querySelector('.heart-btn').addEventListener('click', (e)=>{
      e.stopPropagation();
      toggleFavorite(ch.id);
      renderCharacters(list, containerId);
      renderFavoritesGrid();
    });

    container.appendChild(card);
  });
}

function toggleFavorite(id){
  if(state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveFavorites();
}

function openDetail(id){
  const ch = characters.find(c=>c.id===id);
  const modal = document.getElementById('detailModal');
  const content = document.getElementById('detailContent');
  modal.setAttribute('aria-hidden','false');

  // show placeholder and list the original asset filename (but do NOT load the image)
  const imgHtml = (ch.useImage && ch.image) ? `<img src="${encodeURI(ch.image)}" alt="${ch.name}">` : `<div class="detail-placeholder">${ch.name.split(' ').map(s=>s[0]).slice(0,2).join('')}</div>`;

  content.innerHTML = `
    <div class="detail-grid">
      <div>
        <div class="detail-img">${imgHtml}</div>
        <div style="margin-top:8px;display:flex;gap:8px">
          <button class="primary" id="favToggleBtn">${state.favorites.has(ch.id)?'Unfavorite 💖':'Save to Favorites 🤍'}</button>
          <button class="ghost" id="editProfileBtn">Edit Profile ✏️</button>
        </div>
      </div>
      <div>
        <h2>${ch.name}</h2>
        <div class="tag">Origin</div>
        <p>${ch.origin}</p>
        <p style="font-size:12px;color:#8a6f8a;margin-top:6px">Asset: <em>${ch.source||'–'}</em> (used as metadata only)</p>
        <p style="font-size:13px;color:#5b415b;margin-top:6px">Birthday: <strong>${ch.birthday||'Unknown'}</strong></p>
        <div class="info-section">
          <h4>Personality Traits</h4>
          <p>${ch.personality}</p>
        </div>
        <div class="info-section">
          <h4>Favorite Activities</h4>
          <p>${ch.activities}</p>
        </div>
        <div class="info-section">
          <h4>Likes / Dislikes</h4>
          <p><strong>Likes:</strong> ${ch.likes}</p>
          <p><strong>Dislikes:</strong> ${ch.dislikes}</p>
        </div>
        <div class="info-section">
          <h4>Friends & Relationships</h4>
          <p>${ch.friends}</p>
        </div>
        <div class="info-section">
          <h4>Fun Facts</h4>
          <div class="funfacts">${ch.fun.map(f=>`<div>• ${f}</div>`).join('')}</div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('favToggleBtn').addEventListener('click', ()=>{
    toggleFavorite(ch.id);
    openDetail(ch.id);
    renderCharacters();
    renderFavoritesGrid();
  });
  const editBtn = document.getElementById('editProfileBtn');
  if(editBtn){
    editBtn.addEventListener('click', (e)=>{ e.stopPropagation(); startEdit(ch.id); });
  }
}

function closeModal(){
  const modal = document.getElementById('detailModal');
  modal.setAttribute('aria-hidden','true');
}

function renderFavoritesGrid(){
  const favIds = Array.from(state.favorites);
  const favChars = characters.filter(c=>favIds.includes(c.id));
  const container = document.getElementById('favorites-grid');
  container.innerHTML = '';
  if(favChars.length===0){
    container.innerHTML = '<p>No favorites yet. Tap the heart on a character to save them here.</p>';
    return;
  }
  favChars.forEach(ch=>{
    const card = document.createElement('div');
    card.className='card';
    card.style.background = ch.bg || 'var(--pink)';
    // Do not load asset photos; use placeholder rendering instead
    const imgHtml = (ch.useImage && ch.image) ? `<img src="${encodeURI(ch.image)}" alt="${ch.name}">` : `<div class="placeholder-emoji">${ch.name.split(' ').map(s=>s[0]).slice(0,2).join('')}</div>`;
    card.innerHTML = `<div class="card-img">${imgHtml}</div><h3>${ch.name}</h3><div class="actions"><button class="heart-btn" data-id="${ch.id}">💖</button></div>`;
    card.addEventListener('click', ()=>openDetail(ch.id));
    card.querySelector('.heart-btn').addEventListener('click',(e)=>{e.stopPropagation();toggleFavorite(ch.id);renderFavoritesGrid();renderCharacters();});
    container.appendChild(card);
  });
}

// Navigation and initialization
document.addEventListener('DOMContentLoaded', ()=>{
  // Use built-in fallback characters (do not load external characters.json or asset photos)
  characters = fallbackCharacters;
  // Ensure every character has a birthday (generated deterministically if missing)
  populateBirthdays();
  // Migrate any manual override old ids to canonical ids (e.g., 'sweet-piano' -> 'my-sweet-piano', 'pom' -> 'pompompurin')
  migrateManualOverrides();
  // Remap any existing duplicates (e.g., pom1/pom2) into a single canonical character id,
  // and move favorites/customProfiles to the canonical id before merging saved profiles.
  remapAndMergeDuplicates();
  // After remapping and merging saved profiles, detect accidental merges where two different
  // characters ended up with identical profile data (this can happen during naive merging),
  // and restore canonical fallback data for known characters when available.
  detectAndFixAccidentalMerges();
  // Merge any saved custom profiles from localStorage
  mergeSavedProfiles();
  renderCharacters();
  renderFavoritesGrid();
  // Search filtering
  const searchInput = document.getElementById('searchInput');
  if(searchInput){
    searchInput.addEventListener('input', ()=>{
      const q = searchInput.value.trim().toLowerCase();
      if(!q) renderCharacters(characters);
      else renderCharacters(characters.filter(c=>c.name.toLowerCase().includes(q)));
    });
  }
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('detailModal').addEventListener('click',(e)=>{ if(e.target.id==='detailModal') closeModal(); });

  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = btn.dataset.tab;
      if(!target) return;
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      showTab(target);
    });
  });

  document.querySelectorAll('[data-tab-target]').forEach(b=>b.addEventListener('click', ()=>showTab(b.dataset.tabTarget)));
});

// Remap duplicates by base id (strip trailing digits/spaces) and merge saved profiles/favorites.
function remapAndMergeDuplicates(){
  const saved = loadCustomProfiles();
  const mergedReport = [];
  // Helper to compute base key for an id
  function baseKeyFromId(id){
    if(!id) return id;
    // remove trailing digits and surrounding separators
    return id.replace(/[\s_\-]*\d+$/,'').toLowerCase();
  }

  // Group characters by base key
  const groups = {};
  characters.forEach(ch => {
    const key = baseKeyFromId(ch.id || ch.name || '');
    groups[key] = groups[key] || [];
    groups[key].push(ch);
  });

  Object.keys(groups).forEach(key => {
    const list = groups[key];
    if(list.length <= 1) return;
    // Choose canonical: prefer an id exactly matching the key, otherwise the first
    let canonical = list.find(c=> (c.id||'').toLowerCase()===key) || list[0];
    const canonicalId = canonical.id;
    const mergedIds = [];
    list.forEach(ch => {
      if(ch.id === canonicalId) return;
      const dupId = ch.id;
      mergedIds.push(dupId);

      // Move saved profile for dupId into canonical (merge shallowly)
      if(saved && saved[dupId]){
        saved[canonicalId] = Object.assign({}, saved[dupId], saved[canonicalId] || {});
        delete saved[dupId];
      }

      // Move favorite flag
      if(state.favorites.has(dupId)){
        state.favorites.add(canonicalId);
        state.favorites.delete(dupId);
      }

      // Merge properties from duplicate into canonical when canonical is missing them
      const cidx = characters.findIndex(x=>x.id===canonicalId);
      const didx = characters.findIndex(x=>x.id===dupId);
      if(cidx>=0 && didx>=0){
        const canObj = characters[cidx];
        const dupObj = characters[didx];
        // merge simple fields if empty
        ['origin','personality','activities','likes','dislikes','friends','fun','birthday','bg','source','sources'].forEach(k=>{
          if(dupObj[k] && (!canObj[k] || (Array.isArray(canObj[k])? canObj[k].length===0 : String(canObj[k]).trim()===''))){
            canObj[k] = dupObj[k];
          } else if(k==='sources' && dupObj[k]){
            // union sources arrays
            canObj.sources = Array.from(new Set([...(canObj.sources||[]), ...(dupObj.sources||[])]));
          }
        });
      }
    });

    // Remove duplicates from characters array (keep canonical)
    if(mergedIds.length){
      characters = characters.filter(c=> c.id===canonicalId || !mergedIds.includes(c.id));
      mergedReport.push({canonical: canonicalId, merged: mergedIds});
    }
  });

  // Persist changes to saved profiles and favorites
  saveCustomProfiles(saved);
  saveFavorites();

  if(mergedReport.length) console.info('Merged duplicate character IDs:', mergedReport);
  return mergedReport;
}

// Detect characters with identical core profiles (possible accidental merges)
// and restore canonical fallback data when appropriate.
function detectAndFixAccidentalMerges(){
  if(!characters || characters.length<2) return;
  const sig = id => {
    const c = characters.find(x=>x.id===id) || {};
    const fun = (c.fun||[]).join('|');
    return [c.origin||'', c.personality||'', c.activities||'', c.likes||'', c.dislikes||'', c.friends||'', fun, c.birthday||''].join('||').trim();
  };

  // build signature map
  const map = {};
  characters.forEach(c=>{
    const s = sig(c.id);
    map[s] = map[s] || [];
    map[s].push(c.id);
  });

  const fixes = [];
  Object.values(map).forEach(group => {
    if(group.length < 2) return;
    // group of ids that currently share the same profile signature
    // for each id in group that has an original fallback different from the shared signature, restore it
    group.forEach(id => {
      const orig = originalFallbackMap[id];
      if(!orig) return; // no fallback to restore
      const origSig = [orig.origin||'', orig.personality||'', orig.activities||'', orig.likes||'', orig.dislikes||'', orig.friends||'', (orig.fun||[]).join('|'), orig.birthday||''].join('||').trim();
      if(origSig !== sig(id)){
        // restore original fallback data for this id
        const idx = characters.findIndex(x=>x.id===id);
        if(idx>=0){
          characters[idx] = JSON.parse(JSON.stringify(orig));
          fixes.push(id);
        }
      }
    });
  });

  if(fixes.length){
    console.info('Restored original fallback profiles for:', fixes);
    showToast(`Restored ${fixes.length} canonical profiles`);
  }
}

// Migrate any previously created 'sweet-piano' character to the canonical 'my-sweet-piano'.
function migrateSweetPianoRename(){
  const oldId = 'sweet-piano';
  const newId = 'my-sweet-piano';
  let saved = loadCustomProfiles();
  const hadOldSaved = saved && saved[oldId];
  const hadNewSaved = saved && saved[newId];

  const oldIdx = characters.findIndex(c=>c.id===oldId);
  const newIdx = characters.findIndex(c=>c.id===newId);

  if(oldIdx === -1 && !hadOldSaved && !state.favorites.has(oldId)) return; // nothing to do

  // If newId exists, merge old into new, else rename old to new
  if(newIdx >= 0 && oldIdx >= 0){
    // merge old -> new
    const newObj = characters[newIdx];
    const oldObj = characters[oldIdx];
    newObj.sources = Array.from(new Set([...(newObj.sources||[]), ...(oldObj.sources||[])]));
    ['origin','personality','activities','likes','dislikes','friends','fun','birthday','bg','source'].forEach(k=>{
      if(oldObj[k] && (!newObj[k] || (Array.isArray(newObj[k])? newObj[k].length===0 : String(newObj[k]).trim()===''))){
        newObj[k] = oldObj[k];
      }
    });
    // remove old from characters
    characters = characters.filter(c=>c.id !== oldId);
  } else if(oldIdx >= 0){
    // rename in-place
    characters[oldIdx].id = newId;
    characters[oldIdx].name = 'My Sweet Piano';
  }

  // Move saved profiles
  if(hadOldSaved){
    saved = saved || {};
    if(hadNewSaved){
      // merge shallowly, old fields take precedence if new missing
      saved[newId] = Object.assign({}, saved[newId], saved[oldId]);
    } else {
      saved[newId] = saved[oldId];
    }
    delete saved[oldId];
    saveCustomProfiles(saved);
  }

  // Move favorites
  if(state.favorites.has(oldId)){
    state.favorites.add(newId);
    state.favorites.delete(oldId);
    saveFavorites();
  }

  if(oldIdx>=0 || hadOldSaved || state.favorites.has(newId)){
    console.info(`Migrated ${oldId} -> ${newId}`);
  }
}

// General migration for any manual override entries: map older ids (base keys) to canonical override ids
function migrateManualOverrides(){
  const saved = loadCustomProfiles() || {};
  const report = [];

  Object.keys(manualOverrides).forEach(base => {
    const override = manualOverrides[base];
    const newId = override.id;
    const newName = override.name;

    // candidate old ids that might have been used previously
    const candidates = new Set([
      base,
      slugify(base),
      (base||'').replace(/\s+/g,'-'),
      (base||'').replace(/\s+/g,'_')
    ].filter(Boolean));

    const merged = [];
    candidates.forEach(oldId => {
      if(!oldId) return;
      const oldIdx = characters.findIndex(c=>c.id===oldId);
      const newIdx = characters.findIndex(c=>c.id===newId);

      if(oldIdx === -1 && !saved[oldId] && !state.favorites.has(oldId)) return;

      if(newIdx >= 0 && oldIdx >= 0){
        // merge old into existing new
        const newObj = characters[newIdx];
        const oldObj = characters[oldIdx];
        newObj.sources = Array.from(new Set([...(newObj.sources||[]), ...(oldObj.sources||[])]));
        ['origin','personality','activities','likes','dislikes','friends','fun','birthday','bg','source'].forEach(k=>{
          if(oldObj[k] && (!newObj[k] || (Array.isArray(newObj[k])? newObj[k].length===0 : String(newObj[k]).trim()===''))){
            newObj[k] = oldObj[k];
          }
        });
        characters = characters.filter(c=>c.id!==oldId);
      } else if(oldIdx >= 0){
        // rename in-place
        characters[oldIdx].id = newId;
        characters[oldIdx].name = newName || characters[oldIdx].name;
      }

      // Move saved profile
      if(saved[oldId]){
        if(saved[newId]){
          saved[newId] = Object.assign({}, saved[newId], saved[oldId]);
        } else {
          saved[newId] = saved[oldId];
        }
        delete saved[oldId];
      }

      // Move favorite flag
      if(state.favorites.has(oldId)){
        state.favorites.add(newId);
        state.favorites.delete(oldId);
      }

      merged.push(oldId);
    });

    if(merged.length){
      report.push({canonical: newId, merged});
    }
  });

  if(report.length){
    saveCustomProfiles(saved);
    saveFavorites();
    console.info('Manual override migrations applied:', report);
  }
  return report;
}

// Populate birthdays for characters that don't have one yet.
function populateBirthdays(){
  // operate on fallbackCharacters and generated characters once they are assigned
  const target = characters && characters.length ? characters : fallbackCharacters;
  target.forEach(c=>{
    if(!c.birthday || String(c.birthday).trim()===''){
      c.birthday = generateBirthdayFromId(c.id || c.name || '');
    }
  });
}

// --- Profile editing persistence ---
function loadCustomProfiles(){
  try{
    return JSON.parse(localStorage.getItem('customProfiles')||'{}');
  }catch(e){return {};}
}

function saveCustomProfiles(obj){
  localStorage.setItem('customProfiles', JSON.stringify(obj));
}

function mergeSavedProfiles(){
  const saved = loadCustomProfiles();
  if(!saved) return;
  characters = (characters.length? characters : fallbackCharacters).map(c=>{
    if(saved[c.id]){
      return {...c, ...saved[c.id]};
    }
    return c;
  });
}

function startEdit(id){
  const ch = characters.find(c=>c.id===id);
  if(!ch) return;
  const modal = document.getElementById('detailModal');
  modal.setAttribute('aria-hidden','false');
  const content = document.getElementById('detailContent');
  const funText = (ch.fun||[]).join('\n');
  content.innerHTML = `
    <div class="detail-grid">
      <div>
        <div class="detail-img"><div class="detail-placeholder">${ch.name.split(' ').map(s=>s[0]).slice(0,2).join('')}</div></div>
      </div>
      <div>
        <h2>Edit Profile: ${ch.name}</h2>
        <div class="info-section">
          <label>Origin</label>
          <textarea id="edit-origin" rows="2">${escapeHtml(ch.origin||'')}</textarea>
        </div>
        <div class="info-section">
          <label>Personality</label>
          <textarea id="edit-personality" rows="2">${escapeHtml(ch.personality||'')}</textarea>
        </div>
        <div class="info-section">
          <label>Activities</label>
          <textarea id="edit-activities" rows="2">${escapeHtml(ch.activities||'')}</textarea>
        </div>
        <div class="info-section">
          <label>Birthday</label>
          <input id="edit-birthday" value="${escapeHtml(ch.birthday||'')}" />
        </div>
        <div class="info-section">
          <label>Likes (comma separated)</label>
          <input id="edit-likes" value="${escapeHtml(ch.likes||'')}" />
        </div>
        <div class="info-section">
          <label>Dislikes (comma separated)</label>
          <input id="edit-dislikes" value="${escapeHtml(ch.dislikes||'')}" />
        </div>
        <div class="info-section">
          <label>Friends</label>
          <input id="edit-friends" value="${escapeHtml(ch.friends||'')}" />
        </div>
        <div class="info-section">
          <label>Fun Facts (one per line)</label>
          <textarea id="edit-fun" rows="4">${escapeHtml(funText)}</textarea>
        </div>
        <div style="margin-top:12px;display:flex;gap:8px">
          <button class="primary" id="saveProfileBtn">Save</button>
          <button class="ghost" id="cancelProfileBtn">Cancel</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('cancelProfileBtn').addEventListener('click', ()=>openDetail(id));
  document.getElementById('saveProfileBtn').addEventListener('click', ()=>{
    const updated = {
      origin: document.getElementById('edit-origin').value.trim(),
      personality: document.getElementById('edit-personality').value.trim(),
      activities: document.getElementById('edit-activities').value.trim(),
        birthday: document.getElementById('edit-birthday').value.trim(),
      likes: document.getElementById('edit-likes').value.trim(),
      dislikes: document.getElementById('edit-dislikes').value.trim(),
      friends: document.getElementById('edit-friends').value.trim(),
      fun: document.getElementById('edit-fun').value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean)
    };
    saveProfileEdits(id, updated);
    mergeSavedProfiles();
    renderCharacters();
    openDetail(id);
  });
}

function saveProfileEdits(id, data){
  const saved = loadCustomProfiles();
  saved[id] = {...(saved[id]||{}), ...data};
  saveCustomProfiles(saved);
  // update in-memory characters as well
  const idx = characters.findIndex(c=>c.id===id);
  if(idx>=0) characters[idx] = {...characters[idx], ...data};
}

function escapeHtml(s){
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// --- Export / Import custom profiles (JSON) ---
function showToast(msg, ms=2400){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timeout);
  t._timeout = setTimeout(()=>{ t.classList.remove('show'); }, ms);
}

function exportProfiles(){
  const data = localStorage.getItem('customProfiles') || '{}';
  const blob = new Blob([data], {type:'application/json;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'custom-profiles.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Profiles exported');
}

function importProfilesFile(file){
  if(!file) return showToast('No file selected');
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const obj = JSON.parse(reader.result);
      if(typeof obj !== 'object') throw new Error('Invalid JSON');
      // basic validation: mapping of ids to profile objects
      saveCustomProfiles(obj);
      mergeSavedProfiles();
      renderCharacters();
      showToast('Profiles imported');
    }catch(e){
      showToast('Invalid JSON file');
    }
  };
  reader.readAsText(file);
}

// Wire export/import UI when page is ready
document.addEventListener('DOMContentLoaded', ()=>{
  const exp = document.getElementById('exportProfilesBtn');
  const impInput = document.getElementById('importProfilesInput');
  if(exp) exp.addEventListener('click', ()=>exportProfiles());
  if(impInput) impInput.addEventListener('change', (e)=>{ const f = e.target.files && e.target.files[0]; if(f) importProfilesFile(f); });
});

function showTab(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById(name);
  if(el) el.classList.add('active');
  if(name==='favorites') renderFavoritesGrid();
}

// Expose for inline handlers if needed
window.toggleFavorite = toggleFavorite;
window.openDetail = openDetail;
window.closeModal = closeModal;
