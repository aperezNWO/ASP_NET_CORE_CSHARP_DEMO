﻿using System;

namespace mcsd.Core.Library.DataAccess.Entity
{
    //
    public class MusicTrack
    {
        public int ID { get; set; }
        public string Artist { get; set; }
        public string Title { get; set; }
        public int Length { get; set; }
    }
    //
    public class PersonaEntity
    {
        public string Id_Column { get; set; }
        public string NombreCompleto { get; set; }
        public string ProfesionOficio { get; set; }
        public string Ciudad { get; set; }
    }
    //
    public class AccessLogEntity
    {
        public int Id_Column { get; set; }
        public string PageName { get; set; }
        public DateTime AccessDate { get; set; }
        public string IPValue { get; set; }
    }
}