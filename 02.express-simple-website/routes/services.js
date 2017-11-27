var express = require('express');
var router = express.Router();

var services = [
  {
    title: 'Awareness',
    subtitle: 'Creating an awareness campaign',
    thumb: 'service_icon1.png',
    icon: 'awareness_img.png',
    description: 'You want your audience to hear you? Be creative! This is about using digital display (banner ads) as a channel, to let people know about your brand. The formats available to you are getting even more original, creative and inspiring. And they have to be! How else can they compete in an industry, where hundreds of advertisers are dying for the attention of consumers?'
  },
  {
    title: 'Performance', 
    subtitle: 'If you’re after specific results- this is the way!', 
    thumb: 'service_icon2.png', 
    icon: 'performance_img.png',
    description: 'The objectives that a performance (direct response) campaign serves are very different to those of pure awareness activity. They require specific actions from users- a sale, an inquiry, a registration, etc. This is what gives ‘online’ the perfect advantage over other channels – it allows for a seamless interaction between the brand and the consumer and has the ability to drive direct, measurable conversions. Effective communication is at the forefront of our performance strategy; this is why we plan our campaigns on various platforms, depending on the client’s objectives and target audience.'
  },
  {
    title: 'Engagement', 
    subtitle: 'Engaging users with your brand', 
    thumb: 'service_icon3.png', 
    icon: 'engagement_img.png',
    description: 'The key to consumers’ hearts is engaging content. It must be unique, original, relevant, educational, fun and timely in order to captivate audiences. This kind of engaging content should not be imposed on consumers; it should attract them and prompt them to share it with their friends.'
  },
  {
    title: 'Creative concept', 
    subtitle: 'Balancing creativity with concrete objectives', 
    thumb: 'service_icon4.png', 
    icon: 'creative_img.png',
    description: 'Our experience allows us to understand how to approach online consumers to get your message across faster and more effectively. We have the creativity to achieve your desired objectives by implementing the perfect mix of design, message and user experience. We do this because creativity is what captures consumers’ attention and directs them to your brand instead of disrupting them.'
  },
  {
    title: 'Innovative Software Solutions', 
    subtitle: 'We will provide!', 
    thumb: 'service_icon5.png', 
    icon: 'innovative_img.png',
    description: 'Our professionalism and experience allows us to understand the needs of our clients to create effective software platforms. Our solutions for various business sectors meet leading global standards in the field of information technology'
  }
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('services', {
    title: 'Services',
    route: 'services',
    services: services
  });
});

module.exports = router;
