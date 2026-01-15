import React, { useState } from 'react';
import './GenAIStudyNotes.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const GenAIStudyNotes = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [generatedNotes, setGeneratedNotes] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setGeneratedNotes('');
    };

    const handleGenerateNotes = async () => {
        if (!selectedFile) {
            alert("Please upload a PDF file first.");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await fetch("http://localhost:8080/api/generate-summary", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to generate notes.");
            }

            const data = await response.text(); // or `.json()` if you're returning JSON
            setGeneratedNotes(data);
        } catch (error) {
            console.error("Error generating notes:", error);
            alert("Something went wrong while generating notes.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Header />

            <div className="service1-container">
                <header className="service1-header">
                    <h1>📚 GenAI StudyNotes</h1>
                    <p>Your Smart Study Assistant – Upload. Analyze. Learn.</p>
                </header>

                <section className="service1-content">
                    <div className="service1-description">
                        <h2>Why GenAI StudyNotes?</h2>
                        <ul>
                            <li>🧠 AI-generated summaries from PDFs, Notes, and Images</li>
                            <li>✍️ Perfect for quick revision and exam prep</li>
                            <li>📄 Supports handwritten notes & textbook PDFs</li>
                            <li>⚡ Instant summary and key point generation</li>
                        </ul>
                    </div>

                    <div className="service1-actions">
                        <h3>Try It Now!</h3>
                        <p>Upload your study material and let AI do the rest.</p>

                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            className="upload-input"
                        />

                        <button className="cta-button" onClick={handleGenerateNotes}>
                            Generate Short Notes
                        </button>
                    </div>

                    {loading && <p className="loading-text">Generating notes... ⏳</p>}

                    {generatedNotes && (
                        <div className="service1-output">
                            <h3>📝 Generated Notes</h3>
                            <pre>{generatedNotes}</pre>
                        </div>
                    )}
                </section>
            </div>

            <Footer />
        </>
    );
};

export default GenAIStudyNotes;
