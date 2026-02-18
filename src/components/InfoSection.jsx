import React from 'react';

const InfoSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem',
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '4rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em'
                }}>
                    Comprehensive Oracle Solutions Offered - Integrated Cloud, Data, and Apps
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    color: '#374151',
                    fontSize: '1.125rem',
                    lineHeight: '1.7'
                }}>
                    <div>
                        <p>
                            Oracle’s integrated cloud, data, and application platforms enable organisations to modernise IT, unlock data-driven insights, ensure regulatory compliance, and scale with confidence. By combining Oracle’s world-class technology with Multitech’s execution expertise, we ensure seamless digital transformation from strategy to steady-state operations.
                        </p>
                    </div>
                    <div>
                        <p>
                            Multitech Solutions, in partnership with Oracle India, can deliver a complete, integrated technology stack including Oracle Cloud Infrastructure (OCI) for secure, mission-critical workloads, Data Management & Analytics, and Enterprise Applications like Oracle ERP, HCM, and SCM.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
