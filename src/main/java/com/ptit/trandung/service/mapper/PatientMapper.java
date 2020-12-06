package com.ptit.trandung.service.mapper;


import com.ptit.trandung.domain.*;
import com.ptit.trandung.service.dto.PatientDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Patient} and its DTO {@link PatientDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PatientMapper extends EntityMapper<PatientDTO, Patient> {



    default Patient fromId(Long id) {
        if (id == null) {
            return null;
        }
        Patient patient = new Patient();
        patient.setId(id);
        return patient;
    }
}
