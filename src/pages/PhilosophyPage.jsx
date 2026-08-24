import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaHandHoldingHeart, FaCircleQuestion } from 'react-icons/fa6'

export default function PhilosophyPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I know my contribution actually reaches a family?",
      assamese: "আপুনি দিয়া বস্তু বা টকা সঁচাকৈ প্ৰয়োজনীয় পৰিয়াললৈকে পাইছেনে বুলি কেনেকৈ জানিব? আমাৰ প্ৰতিটো সংগ্ৰহ আৰু বিতৰণ Live Relief Dashboard-ত খোলাভাৱে তালিকাভুক্ত কৰা হয়, যাতে যিকোনো লোকে ইয়াক পৰীক্ষা কৰিব পাৰে।",
      english: "Every item and rupee received is logged openly on our Live Relief Dashboard, and our ground team photographs and records each village dispatch. Nothing is distributed without being tracked back to the original pledge."
    },
    {
      question: "Can I provide relief materials without visiting the drop-off point myself?",
      assamese: "নিজে গৈ নথৈ ৰিলিফ সামগ্ৰী দিব পাৰিমনে? হয়, আপুনি WhatsApp-ৰ জৰিয়তে আমাৰ সংগঠকৰ সৈতে যোগাযোগ কৰিব পাৰে আৰু সংগ্ৰহৰ ব্যৱস্থা কৰিব পাৰি।",
      english: "Yes. Message our ground coordinator on WhatsApp and we can arrange pickup for larger contributions, or you can drop items at the Deochora collection point any day between 9 AM and 7 PM."
    },
    {
      question: "How can a flood-affected family request help?",
      assamese: "বানপানীত ক্ষতিগ্ৰস্ত হোৱা পৰিয়ালে কেনেকৈ সহায় বিচাৰিব পাৰে? 'Request Relief Assistance' ফৰ্মটো পূৰণ কৰক বা পোনপটীয়াকৈ আমাৰ সংগঠকক ফোন কৰক, আমাৰ টিমে যিমান সোনকালে পাৰি সেই অঞ্চললৈ যাব।",
      english: "Fill out the Request Relief Assistance form, or call our ground coordinator directly. Our team verifies the need and prioritizes dispatch to the most urgent and hard-to-reach areas first."
    },
    {
      question: "What relief categories does the foundation currently focus on?",
      assamese: "আমাৰ ড্ৰাইভে মূলতঃ জৰুৰীকালীন ৰেচন আৰু পানী, চিকিৎসা সহায়, আশ্ৰয় সামগ্ৰী, মাতৃ আৰু শিশু সহায়, আৰু দীৰ্ঘমেয়াদী পুনৰ্বাসনৰ ওপৰত গুৰুত্ব দিয়ে।",
      english: "We currently focus on emergency ration & clean water, medical relief camps, temporary shelter kits, maternal & child support, and long-term rehabilitation for the hardest-hit households."
    },
    {
      question: "Can I volunteer with the ground team instead of donating materials?",
      assamese: "মই বস্তু নিদি স্বেচ্ছাসেৱক হিচাপে কাম কৰিব পাৰিমনে? নিশ্চয়, আমাক নাও চলোৱা, বিতৰণ আৰু প্যাকিঙত সহায় কৰিব পৰা স্থানীয় স্বেচ্ছাসেৱকৰ প্ৰয়োজন। আমাৰ সংগঠকক WhatsApp-ত যোগাযোগ কৰক।",
      english: "Absolutely! We need local volunteers to help with boat runs, distribution and packing kits at the collection point. Message our ground coordinator on WhatsApp to join the roster."
    }
  ];

  return (
    <div className="section" style={{ marginTop: '2.5rem' }}>
      <div className="section-header">
        <span className="section-tag">FREQUENTLY ASKED QUESTIONS</span>
        <h2 className="section-title">FAQs & Transparency</h2>
        <p className="section-desc">Understanding how the relief drive works, how contributions are tracked, and how to get involved.</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`faq-card ${isOpen ? 'open' : ''}`}>
              <button className="faq-header-button" onClick={() => toggleFaq(index)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FaCircleQuestion size={20} style={{ color: '#8B1E2D', flexShrink: 0 }} />
                  <span className="faq-question-title">{faq.question}</span>
                </div>
                <div className="faq-icon-arrow">
                  <FaChevronDown size={14} />
                </div>
              </button>

              {isOpen && (
                <div className="faq-body-content">
                  <div className="faq-lang-block">
                    <h5>English Explanation</h5>
                    <p>{faq.english}</p>
                  </div>

                  <div className="faq-lang-block" style={{ backgroundColor: '#f9fcf9', padding: '1rem', borderRadius: '10px', border: '1px solid #e8f3ea' }}>
                    <h5 style={{ color: '#8B1E2D' }}>অসমীয়া (Assamese)</h5>
                    <p style={{ color: '#2c3e50', fontWeight: 500 }}>{faq.assamese}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
        <Link to="/contribution" className="btn-hero-primary">
          <FaHandHoldingHeart size={18} />
          <span>Provide Relief Materials</span>
        </Link>
      </div>
    </div>
  )
}
